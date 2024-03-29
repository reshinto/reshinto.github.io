# Python Example

## Violate OCP

- potential issues:
  - if later, you want to add a new option or new question type to the quiz
    - e.g.: a range of values type
  - refer to **Violate OCP Extended**

```python
def print_quiz(questions):
    for question in questions:
        print(question["description"])
        if question["type"] == "boolean":
            print("1. True")
            print("2.False")
        elif question["type"] == "multipleChoice":
            for index, option in enumerate(question["options"]):
                print(f"{index + 1}. {option}")
        elif question["type"] == "text":
            print("Answer: _______________")
        else:
            print("")


questions = [
    {
        "type": "boolean",
        "description": "This video is useful.",
    },
    {
        "type": "multipleChoice",
        "description": "What is your favorite language?",
        "options": ["CSS", "HTML", "JS", "Python"],
    },
    {
        "type": "text",
        "description": "Describe your favorite JS feature",
    },
]

print_quiz(questions)
```

## Violate OCP Extended

```python
def print_quiz(questions):
    # this allows us to extend new types, which passes the open portion of the open-closed principle
    # when we add new features, it automatically extends the new questions and works
    # thus, modification of the open portion is not required
    for question in questions:
        print(question["description"])
        if question["type"] == "boolean":
            print("1. True")
            print("2.False")
        elif question["type"] == "multipleChoice":
            for index, option in enumerate(question["options"]):
                print(f"{index + 1}. {option}")
        elif question["type"] == "text":
            print("Answer: _______________")
        # this violates the closed portion of the open-closed principle
        # this function should be closed and not allowed for modifications
        # it should just work when new features are extended
        elif question["type"] == "range":
            print("Minimum: ______________")
            print("Maximum: ______________")
        else:
            print("")


questions = [
    {
        "type": "boolean",
        "description": "This video is useful.",
    },
    {
        "type": "multipleChoice",
        "description": "What is your favorite language?",
        "options": ["CSS", "HTML", "JS", "Python"],
    },
    {
        "type": "text",
        "description": "Describe your favorite JS feature",
    },
    # this is ok to modify as it is just extending new feature
    {
        "type": "range",
        "description": "What is the speed limit in your city?",
    },
]

print_quiz(questions)
```

## Pass OCP

```python
# Polymorphic open-closed principle
class Question:
    def __init__(self, description):
        self.description = description

    def print_question_choices(self):
        print("")


class BooleanQuestion(Question):
    def __init__(self, description):
        super().__init__(description)

    def print_question_choices(self):
        print("1. True")
        print("2. False")


class MultipleChoiceQuestion(Question):
    def __init__(self, description, options):
        super().__init__(description)
        self.options = options

    def print_question_choices(self):
        for index, option in enumerate(self.options):
            print(f"{index + 1}. {option}")


class TextQuestion(Question):
    def __init__(self, description):
        super().__init__(description)

    def print_question_choices(self):
        print("Answer: _______________")


class RangeQuestion(Question):
    def __init__(self, description):
        super().__init__(description)

    def print_question_choices(self):
        print("Minimum: ______________")
        print("Maximum: ______________")


# this is open to be extended
# closed for modification as we do not need to touch this function
def print_quiz(questions):
    for question in questions:
        print(question.description)
        question.print_question_choices()


# only need to extend new features here
questions = [
    BooleanQuestion("This video is useful."),
    MultipleChoiceQuestion(
        "What is your favorite language?",
        [
            "CSS",
            "HTML",
            "JS",
            "Python",
        ],
    ),
    TextQuestion("Describe your favorite JS feature."),
    RangeQuestion("What is the speed limit in your city?"),
]

print_quiz(questions)
```
