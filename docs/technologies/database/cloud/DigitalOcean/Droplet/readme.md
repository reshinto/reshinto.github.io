# How to configure newly created droplet with SSH

- SSH with root
  &gt; ssh root@11.123.123.123

## Create new user

- add new user
  &gt; adduser myusername

```
Adding user `myusername' ...
Adding new group `myusername' (1000) ...
Adding new user `myusername' (1000) with group `myusername' ...
Creating home directory `/home/myusername' ...
Copying files from `/etc/skel' ...
```

- type in user password

```
New password:
Retype new password:
```

- enter the required details

```
passwd: password updated successfully
Changing the user information for myusername
Enter the new value, or press ENTER for the default
  Full Name []:
  Room Number []:
  Work Phone []:
  Home Phone []:
  Other []:
Is the information correct? [Y/n]
```

- enable sudo
  &gt; usermod -aG sudo myusername
- check if your username exist and sudo enabled
  &gt; id myusername

```
uid=1000(myusername) gid=1000(myusername) groups=1000(myusername),27(sudo)
```

- login to user account
  &gt; sudo su - myusername

## Enable SSH for new user

- create SSH directory
  &gt; mkdir ~/.ssh
- change permission of the folder
  &gt; chmod 700 ~/.ssh
- open file
  &gt; nano ~/.ssh/authorized_keys
  - on your local pc copy the ssh public key with `pbcopy < ~/.ssh/id_ed25519.pub`
  - paste the ssh public key into the file
  ```
  ssh-ed25519 LHBSLUBLYUG'O(TGUYhkvybg76g7OUYVG'(OBL
  ```
  - change permission for this file
    &gt; chmod 600 ~/.ssh/authorized_keys
- restart SSH service
  &gt; sudo service ssh restart
- test SSH login with new user
  &gt; ssh myusername@11.123.123.123

## Other configs

### disable root login and password authentication

&gt; sudo vim /etc/ssh/sshd_config

- change `yes` to `no`

```
...
PermitRootLogin yes
...
PasswordAuthentication yes
...
```

- reload sshd
  &gt; sudo systemctl reload sshd

### change droplet name inside droplet

&gt; sudo hostnamectl set-hostname new-host-name

- exit from SSH and re-enter again for changes to take effect
