from CircleRefinedAbstraction import CircleRefinedAbstraction
from TriangleAbstraction import TriangleAbstraction
from RedConcreteImplementation import RedConcreteImplementation
from BlueConcreteImplementation import BlueConcreteImplementation


if __name__ == "__main__":
    circle = CircleRefinedAbstraction(RedConcreteImplementation())
    triangle = TriangleAbstraction(BlueConcreteImplementation())

    circle.log_me()

    triangle.log_me()
