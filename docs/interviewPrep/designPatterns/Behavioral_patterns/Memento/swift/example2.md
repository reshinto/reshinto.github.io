# Example 2

```swift
import XCTest

class MementoRealWorld: XCTestCase {

    /// State and Command are often used together when the previous state of the
    /// object should be restored in case of failure of some operation.
    ///
    /// Note: UndoManager can be used as an alternative.

    func test() {

        let textView = UITextView()
        let undoStack = UndoStack(textView)

        textView.text = "First Change"
        undoStack.save()

        textView.text = "Second Change"
        undoStack.save()

        textView.text = (textView.text ?? "") + " & Third Change"
        textView.textColor = .red
        undoStack.save()

        print(undoStack)

        print("Client: Perform Undo operation 2 times\n")
        undoStack.undo()
        undoStack.undo()

        print(undoStack)
    }
}

class UndoStack: CustomStringConvertible {

    private lazy var mementos = [Memento]()
    private let textView: UITextView

    init(_ textView: UITextView) {
        self.textView = textView
    }

    func save() {
        mementos.append(textView.memento)
    }

    func undo() {
        guard !mementos.isEmpty else { return }
        textView.restore(with: mementos.removeLast())
    }

    var description: String {
        return mementos.reduce("", { $0 + $1.description })
    }
}

protocol Memento: CustomStringConvertible {

    var text: String { get }
    var date: Date { get }
}

extension UITextView {

    var memento: Memento {
        return TextViewMemento(text: text,
                               textColor: textColor,
                               selectedRange: selectedRange)
    }

    func restore(with memento: Memento) {
        guard let textViewMemento = memento as? TextViewMemento else { return }

        text = textViewMemento.text
        textColor = textViewMemento.textColor
        selectedRange = textViewMemento.selectedRange
    }

    struct TextViewMemento: Memento {

        let text: String
        let date = Date()

        let textColor: UIColor?
        let selectedRange: NSRange

        var description: String {
            let time = Calendar.current.dateComponents([.hour, .minute, .second, .nanosecond],
                                                       from: date)
            let color = String(describing: textColor)
            return "Text: \(text)\n" + "Date: \(time.description)\n"
                + "Color: \(color)\n" + "Range: \(selectedRange)\n\n"
        }
    }
}
```

```
Text: First Change
Date: hour: 12 minute: 21 second: 50 nanosecond: 821737051 isLeapMonth: false
Color: nil
Range: {12, 0}

Text: Second Change
Date: hour: 12 minute: 21 second: 50 nanosecond: 826483011 isLeapMonth: false
Color: nil
Range: {13, 0}

Text: Second Change & Third Change
Date: hour: 12 minute: 21 second: 50 nanosecond: 829187035 isLeapMonth: false
Color: Optional(UIExtendedSRGBColorSpace 1 0 0 1)
Range: {28, 0}


Client: Perform Undo operation 2 times

Text: First Change
Date: hour: 12 minute: 21 second: 50 nanosecond: 821737051 isLeapMonth: false
Color: nil
Range: {12, 0}
```
