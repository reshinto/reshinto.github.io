"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[5332],{3905:(e,n,r)=>{r.d(n,{Zo:()=>l,kt:()=>g});var t=r(67294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function p(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=t.createContext({}),u=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},l=function(e){var n=u(e.components);return t.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},c=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),c=u(r),g=a,d=c["".concat(s,".").concat(g)]||c[g]||m[g]||i;return r?t.createElement(d,o(o({ref:n},l),{},{components:r})):t.createElement(d,o({ref:n},l))}));function g(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=c;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var u=2;u<i;u++)o[u]=r[u];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}c.displayName="MDXCreateElement"},14490:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>u});var t=r(87462),a=(r(67294),r(3905));const i={},o="Java Example",p={unversionedId:"interviewPrep/designPatterns/Creational_patterns/Builder/java/readme",id:"interviewPrep/designPatterns/Creational_patterns/Builder/java/readme",title:"Java Example",description:"- builders",source:"@site/docs/interviewPrep/designPatterns/Creational_patterns/Builder/java/readme.md",sourceDirName:"interviewPrep/designPatterns/Creational_patterns/Builder/java",slug:"/interviewPrep/designPatterns/Creational_patterns/Builder/java/",permalink:"/docs/interviewPrep/designPatterns/Creational_patterns/Builder/java/",draft:!1,editUrl:"https://github.com/reshinto/reshinto.github.io/blob/dev/docs/interviewPrep/designPatterns/Creational_patterns/Builder/java/readme.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Go Example",permalink:"/docs/interviewPrep/designPatterns/Creational_patterns/Builder/go/"},next:{title:"JavaScript Example",permalink:"/docs/interviewPrep/designPatterns/Creational_patterns/Builder/javascript/"}},s={},u=[],l={toc:u};function m(e){let{components:n,...r}=e;return(0,a.kt)("wrapper",(0,t.Z)({},l,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"java-example"},"Java Example"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"builders"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"builders/Builder.java"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-java"},"package refactoring_guru.builder.example.builders;\n\nimport refactoring_guru.builder.example.cars.CarType;\nimport refactoring_guru.builder.example.components.Engine;\nimport refactoring_guru.builder.example.components.GPSNavigator;\nimport refactoring_guru.builder.example.components.Transmission;\nimport refactoring_guru.builder.example.components.TripComputer;\n\n/**\n * Builder interface defines all possible ways to configure a product.\n*/\npublic interface Builder {\n    void setCarType(CarType type);\n    void setSeats(int seats);\n    void setEngine(Engine engine);\n    void setTransmission(Transmission transmission);\n    void setTripComputer(TripComputer tripComputer);\n    void setGPSNavigator(GPSNavigator gpsNavigator);\n}\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"builders/CarBuilder.java"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-java"},"package refactoring_guru.builder.example.builders;\n\nimport refactoring_guru.builder.example.cars.Car;\nimport refactoring_guru.builder.example.cars.CarType;\nimport refactoring_guru.builder.example.components.Engine;\nimport refactoring_guru.builder.example.components.GPSNavigator;\nimport refactoring_guru.builder.example.components.Transmission;\nimport refactoring_guru.builder.example.components.TripComputer;\n\n/**\n * Concrete builders implement steps defined in the common interface.\n*/\npublic class CarBuilder implements Builder {\n    private CarType type;\n    private int seats;\n    private Engine engine;\n    private Transmission transmission;\n    private TripComputer tripComputer;\n    private GPSNavigator gpsNavigator;\n\n    public void setCarType(CarType type) {\n        this.type = type;\n    }\n\n    @Override\n    public void setSeats(int seats) {\n        this.seats = seats;\n    }\n\n    @Override\n    public void setEngine(Engine engine) {\n        this.engine = engine;\n    }\n\n    @Override\n    public void setTransmission(Transmission transmission) {\n        this.transmission = transmission;\n    }\n\n    @Override\n    public void setTripComputer(TripComputer tripComputer) {\n        this.tripComputer = tripComputer;\n    }\n\n    @Override\n    public void setGPSNavigator(GPSNavigator gpsNavigator) {\n        this.gpsNavigator = gpsNavigator;\n    }\n\n    public Car getResult() {\n        return new Car(type, seats, engine, transmission, tripComputer, gpsNavigator);\n    }\n}\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"builders/CarManualBuilder.java"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-java"},"package refactoring_guru.builder.example.builders;\n\nimport refactoring_guru.builder.example.cars.Manual;\nimport refactoring_guru.builder.example.cars.CarType;\nimport refactoring_guru.builder.example.components.Engine;\nimport refactoring_guru.builder.example.components.GPSNavigator;\nimport refactoring_guru.builder.example.components.Transmission;\nimport refactoring_guru.builder.example.components.TripComputer;\n\n/**\n * Unlike other creational patterns, Builder can construct unrelated products,\n* which don't have the common interface.\n*\n* In this case we build a user manual for a car, using the same steps as we\n* built a car. This allows to produce manuals for specific car models,\n* configured with different features.\n*/\npublic class CarManualBuilder implements Builder{\n    private CarType type;\n    private int seats;\n    private Engine engine;\n    private Transmission transmission;\n    private TripComputer tripComputer;\n    private GPSNavigator gpsNavigator;\n\n    @Override\n    public void setCarType(CarType type) {\n        this.type = type;\n    }\n\n    @Override\n    public void setSeats(int seats) {\n        this.seats = seats;\n    }\n\n    @Override\n    public void setEngine(Engine engine) {\n        this.engine = engine;\n    }\n\n    @Override\n    public void setTransmission(Transmission transmission) {\n        this.transmission = transmission;\n    }\n\n    @Override\n    public void setTripComputer(TripComputer tripComputer) {\n        this.tripComputer = tripComputer;\n    }\n\n    @Override\n    public void setGPSNavigator(GPSNavigator gpsNavigator) {\n        this.gpsNavigator = gpsNavigator;\n    }\n\n    public Manual getResult() {\n        return new Manual(type, seats, engine, transmission, tripComputer, gpsNavigator);\n    }\n}\n"))))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"cars"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"cars/Car.java"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-java"},"package refactoring_guru.builder.example.cars;\n\nimport refactoring_guru.builder.example.components.Engine;\nimport refactoring_guru.builder.example.components.GPSNavigator;\nimport refactoring_guru.builder.example.components.Transmission;\nimport refactoring_guru.builder.example.components.TripComputer;\n\n/**\n * Car is a product class.\n*/\npublic class Car {\n    private final CarType carType;\n    private final int seats;\n    private final Engine engine;\n    private final Transmission transmission;\n    private final TripComputer tripComputer;\n    private final GPSNavigator gpsNavigator;\n    private double fuel = 0;\n\n    public Car(CarType carType, int seats, Engine engine, Transmission transmission,\n              TripComputer tripComputer, GPSNavigator gpsNavigator) {\n        this.carType = carType;\n        this.seats = seats;\n        this.engine = engine;\n        this.transmission = transmission;\n        this.tripComputer = tripComputer;\n        if (this.tripComputer != null) {\n            this.tripComputer.setCar(this);\n        }\n        this.gpsNavigator = gpsNavigator;\n    }\n\n    public CarType getCarType() {\n        return carType;\n    }\n\n    public double getFuel() {\n        return fuel;\n    }\n\n    public void setFuel(double fuel) {\n        this.fuel = fuel;\n    }\n\n    public int getSeats() {\n        return seats;\n    }\n\n    public Engine getEngine() {\n        return engine;\n    }\n\n    public Transmission getTransmission() {\n        return transmission;\n    }\n\n    public TripComputer getTripComputer() {\n        return tripComputer;\n    }\n\n    public GPSNavigator getGpsNavigator() {\n        return gpsNavigator;\n    }\n}\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"cars/CarType.java"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-java"},"package refactoring_guru.builder.example.cars;\n\npublic enum CarType {\n    CITY_CAR, SPORTS_CAR, SUV\n}\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"cars/Manual.java"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-java"},'package refactoring_guru.builder.example.cars;\n\nimport refactoring_guru.builder.example.components.Engine;\nimport refactoring_guru.builder.example.components.GPSNavigator;\nimport refactoring_guru.builder.example.components.Transmission;\nimport refactoring_guru.builder.example.components.TripComputer;\n\n/**\n* Car manual is another product. Note that it does not have the same ancestor\n* as a Car. They are not related.\n*/\npublic class Manual {\n    private final CarType carType;\n    private final int seats;\n    private final Engine engine;\n    private final Transmission transmission;\n    private final TripComputer tripComputer;\n    private final GPSNavigator gpsNavigator;\n\n    public Manual(CarType carType, int seats, Engine engine, Transmission transmission,\n                  TripComputer tripComputer, GPSNavigator gpsNavigator) {\n        this.carType = carType;\n        this.seats = seats;\n        this.engine = engine;\n        this.transmission = transmission;\n        this.tripComputer = tripComputer;\n        this.gpsNavigator = gpsNavigator;\n    }\n\n    public String print() {\n        String info = "";\n        info += "Type of car: " + carType + "\\n";\n        info += "Count of seats: " + seats + "\\n";\n        info += "Engine: volume - " + engine.getVolume() + "; mileage - " + engine.getMileage() + "\\n";\n        info += "Transmission: " + transmission + "\\n";\n        if (this.tripComputer != null) {\n            info += "Trip Computer: Functional" + "\\n";\n        } else {\n            info += "Trip Computer: N/A" + "\\n";\n        }\n        if (this.gpsNavigator != null) {\n            info += "GPS Navigator: Functional" + "\\n";\n        } else {\n            info += "GPS Navigator: N/A" + "\\n";\n        }\n        return info;\n    }\n}\n'))))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"components"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"components/Engine.java"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-java"},'package refactoring_guru.builder.example.components;\n\n/**\n * Just another feature of a car.\n*/\npublic class Engine {\n    private final double volume;\n    private double mileage;\n    private boolean started;\n\n    public Engine(double volume, double mileage) {\n        this.volume = volume;\n        this.mileage = mileage;\n    }\n\n    public void on() {\n        started = true;\n    }\n\n    public void off() {\n        started = false;\n    }\n\n    public boolean isStarted() {\n        return started;\n    }\n\n    public void go(double mileage) {\n        if (started) {\n            this.mileage += mileage;\n        } else {\n            System.err.println("Cannot go(), you must start engine first!");\n        }\n    }\n\n    public double getVolume() {\n        return volume;\n    }\n\n    public double getMileage() {\n        return mileage;\n    }\n}\n'))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"components/GPSNavigator.java"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-java"},'package refactoring_guru.builder.example.components;\n\n/**\n * Just another feature of a car.\n*/\npublic class GPSNavigator {\n    private String route;\n\n    public GPSNavigator() {\n        this.route = "221b, Baker Street, London  to Scotland Yard, 8-10 Broadway, London";\n    }\n\n    public GPSNavigator(String manualRoute) {\n        this.route = manualRoute;\n    }\n\n    public String getRoute() {\n        return route;\n    }\n}\n'))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"components/Transmission.java"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-java"},"package refactoring_guru.builder.example.components;\n\n/**\n * Just another feature of a car.\n*/\npublic enum Transmission {\n    SINGLE_SPEED, MANUAL, AUTOMATIC, SEMI_AUTOMATIC\n}\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"components/TripComputer.java"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-java"},'package refactoring_guru.builder.example.components;\n\nimport refactoring_guru.builder.example.cars.Car;\n\n/**\n * Just another feature of a car.\n*/\npublic class TripComputer {\n\n    private Car car;\n\n    public void setCar(Car car) {\n        this.car = car;\n    }\n\n    public void showFuelLevel() {\n        System.out.println("Fuel level: " + car.getFuel());\n    }\n\n    public void showStatus() {\n        if (this.car.getEngine().isStarted()) {\n            System.out.println("Car is started");\n        } else {\n            System.out.println("Car isn\'t started");\n        }\n    }\n}\n'))))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"director"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"director/Director.java"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-java"},"package refactoring_guru.builder.example.director;\n\nimport refactoring_guru.builder.example.builders.Builder;\nimport refactoring_guru.builder.example.cars.CarType;\nimport refactoring_guru.builder.example.components.Engine;\nimport refactoring_guru.builder.example.components.GPSNavigator;\nimport refactoring_guru.builder.example.components.Transmission;\nimport refactoring_guru.builder.example.components.TripComputer;\n\n/**\n * Director defines the order of building steps. It works with a builder object\n* through common Builder interface. Therefore it may not know what product is\n* being built.\n*/\npublic class Director {\n\n    public void constructSportsCar(Builder builder) {\n        builder.setCarType(CarType.SPORTS_CAR);\n        builder.setSeats(2);\n        builder.setEngine(new Engine(3.0, 0));\n        builder.setTransmission(Transmission.SEMI_AUTOMATIC);\n        builder.setTripComputer(new TripComputer());\n        builder.setGPSNavigator(new GPSNavigator());\n    }\n\n    public void constructCityCar(Builder builder) {\n        builder.setCarType(CarType.CITY_CAR);\n        builder.setSeats(2);\n        builder.setEngine(new Engine(1.2, 0));\n        builder.setTransmission(Transmission.AUTOMATIC);\n        builder.setTripComputer(new TripComputer());\n        builder.setGPSNavigator(new GPSNavigator());\n    }\n\n    public void constructSUV(Builder builder) {\n        builder.setCarType(CarType.SUV);\n        builder.setSeats(4);\n        builder.setEngine(new Engine(2.5, 0));\n        builder.setTransmission(Transmission.MANUAL);\n        builder.setGPSNavigator(new GPSNavigator());\n    }\n}\n"))))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Demo.java"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'package refactoring_guru.builder.example;\n\nimport refactoring_guru.builder.example.builders.CarBuilder;\nimport refactoring_guru.builder.example.builders.CarManualBuilder;\nimport refactoring_guru.builder.example.cars.Car;\nimport refactoring_guru.builder.example.cars.Manual;\nimport refactoring_guru.builder.example.director.Director;\n\n/**\n * Demo class. Everything comes together here.\n */\npublic class Demo {\n\n    public static void main(String[] args) {\n        Director director = new Director();\n\n        // Director gets the concrete builder object from the client\n        // (application code). That\'s because application knows better which\n        // builder to use to get a specific product.\n        CarBuilder builder = new CarBuilder();\n        director.constructSportsCar(builder);\n\n        // The final product is often retrieved from a builder object, since\n        // Director is not aware and not dependent on concrete builders and\n        // products.\n        Car car = builder.getResult();\n        System.out.println("Car built:\\n" + car.getCarType());\n\n\n        CarManualBuilder manualBuilder = new CarManualBuilder();\n\n        // Director may know several building recipes.\n        director.constructSportsCar(manualBuilder);\n        Manual carManual = manualBuilder.getResult();\n        System.out.println("\\nCar manual built:\\n" + carManual.print());\n    }\n\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Car built:\nSPORTS_CAR\n\nCar manual built:\nType of car: SPORTS_CAR\nCount of seats: 2\nEngine: volume - 3.0; mileage - 0.0\nTransmission: SEMI_AUTOMATIC\nTrip Computer: Functional\nGPS Navigator: Functional\n")))}m.isMDXComponent=!0}}]);