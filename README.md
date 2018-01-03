# saratoga

Installation:

Sign in to the AWS Console. Create a ‘Compute’ instance –EC2 or Lightsail. If using Lightsail, select Linux APP+OS Bitnami LAMP Stack blueprint.

$ mkdir .saratoga
$ cd .saratoga

Git clone the repository to the instance

$ ./install_nodejs.sh
$ npm install
$ ./saratoga_remote.sh
