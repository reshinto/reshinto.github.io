# Java Example

- devices

  - devices/Device.java

    ```java
    package refactoring_guru.bridge.example.devices;

    public interface Device {
        boolean isEnabled();

        void enable();

        void disable();

        int getVolume();

        void setVolume(int percent);

        int getChannel();

        void setChannel(int channel);

        void printStatus();
    }
    ```

  - devices/Radio.java

    ```java
    package refactoring_guru.bridge.example.devices;

    public class Radio implements Device {
        private boolean on = false;
        private int volume = 30;
        private int channel = 1;

        @Override
        public boolean isEnabled() {
            return on;
        }

        @Override
        public void enable() {
            on = true;
        }

        @Override
        public void disable() {
            on = false;
        }

        @Override
        public int getVolume() {
            return volume;
        }

        @Override
        public void setVolume(int volume) {
            if (volume > 100) {
                this.volume = 100;
            } else if (volume < 0) {
                this.volume = 0;
            } else {
                this.volume = volume;
            }
        }

        @Override
        public int getChannel() {
            return channel;
        }

        @Override
        public void setChannel(int channel) {
            this.channel = channel;
        }

        @Override
        public void printStatus() {
            System.out.println("------------------------------------");
            System.out.println("| I'm radio.");
            System.out.println("| I'm " + (on ? "enabled" : "disabled"));
            System.out.println("| Current volume is " + volume + "%");
            System.out.println("| Current channel is " + channel);
            System.out.println("------------------------------------\n");
        }
    }
    ```

  - devices/Tv.java

    ```java
    package refactoring_guru.bridge.example.devices;

    public class Tv implements Device {
        private boolean on = false;
        private int volume = 30;
        private int channel = 1;

        @Override
        public boolean isEnabled() {
            return on;
        }

        @Override
        public void enable() {
            on = true;
        }

        @Override
        public void disable() {
            on = false;
        }

        @Override
        public int getVolume() {
            return volume;
        }

        @Override
        public void setVolume(int volume) {
            if (volume > 100) {
                this.volume = 100;
            } else if (volume < 0) {
                this.volume = 0;
            } else {
                this.volume = volume;
            }
        }

        @Override
        public int getChannel() {
            return channel;
        }

        @Override
        public void setChannel(int channel) {
            this.channel = channel;
        }

        @Override
        public void printStatus() {
            System.out.println("------------------------------------");
            System.out.println("| I'm TV set.");
            System.out.println("| I'm " + (on ? "enabled" : "disabled"));
            System.out.println("| Current volume is " + volume + "%");
            System.out.println("| Current channel is " + channel);
            System.out.println("------------------------------------\n");
        }
    }
    ```

- remotes

  - remotes/AdvancedRemote.java

    ```java
    package refactoring_guru.bridge.example.remotes;

    import refactoring_guru.bridge.example.devices.Device;

    public class AdvancedRemote extends BasicRemote {

        public AdvancedRemote(Device device) {
            super.device = device;
        }

        public void mute() {
            System.out.println("Remote: mute");
            device.setVolume(0);
        }
    }
    ```

  - remotes/BasicRemote.java

    ```java
    package refactoring_guru.bridge.example.remotes;

    import refactoring_guru.bridge.example.devices.Device;

    public class BasicRemote implements Remote {
        protected Device device;

        public BasicRemote() {}

        public BasicRemote(Device device) {
            this.device = device;
        }

        @Override
        public void power() {
            System.out.println("Remote: power toggle");
            if (device.isEnabled()) {
                device.disable();
            } else {
                device.enable();
            }
        }

        @Override
        public void volumeDown() {
            System.out.println("Remote: volume down");
            device.setVolume(device.getVolume() - 10);
        }

        @Override
        public void volumeUp() {
            System.out.println("Remote: volume up");
            device.setVolume(device.getVolume() + 10);
        }

        @Override
        public void channelDown() {
            System.out.println("Remote: channel down");
            device.setChannel(device.getChannel() - 1);
        }

        @Override
        public void channelUp() {
            System.out.println("Remote: channel up");
            device.setChannel(device.getChannel() + 1);
        }
    }
    ```

  - remotes/Remote.java

    ```java
    package refactoring_guru.bridge.example.remotes;

    public interface Remote {
        void power();

        void volumeDown();

        void volumeUp();

        void channelDown();

        void channelUp();
    }
    ```

- Demo.java

```java
package refactoring_guru.bridge.example;

import refactoring_guru.bridge.example.devices.Device;
import refactoring_guru.bridge.example.devices.Radio;
import refactoring_guru.bridge.example.devices.Tv;
import refactoring_guru.bridge.example.remotes.AdvancedRemote;
import refactoring_guru.bridge.example.remotes.BasicRemote;

public class Demo {
    public static void main(String[] args) {
        testDevice(new Tv());
        testDevice(new Radio());
    }

    public static void testDevice(Device device) {
        System.out.println("Tests with basic remote.");
        BasicRemote basicRemote = new BasicRemote(device);
        basicRemote.power();
        device.printStatus();

        System.out.println("Tests with advanced remote.");
        AdvancedRemote advancedRemote = new AdvancedRemote(device);
        advancedRemote.power();
        advancedRemote.mute();
        device.printStatus();
    }
}
```

```
Tests with basic remote.
Remote: power toggle
------------------------------------
| I'm TV set.
| I'm enabled
| Current volume is 30%
| Current channel is 1
------------------------------------

Tests with advanced remote.
Remote: power toggle
Remote: mute
------------------------------------
| I'm TV set.
| I'm disabled
| Current volume is 0%
| Current channel is 1
------------------------------------

Tests with basic remote.
Remote: power toggle
------------------------------------
| I'm radio.
| I'm enabled
| Current volume is 30%
| Current channel is 1
------------------------------------

Tests with advanced remote.
Remote: power toggle
Remote: mute
------------------------------------
| I'm radio.
| I'm disabled
| Current volume is 0%
| Current channel is 1
------------------------------------
```
