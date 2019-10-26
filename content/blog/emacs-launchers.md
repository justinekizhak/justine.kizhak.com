---
title: Emacs launchers
date: "2019-10-22T20:59:19"
excerpt: Launchers for Emacs, Emacs daemon and Emacs client
---

[![Built with Spacemacs](https://img.shields.io/badge/built_with-Spacemacs-blueviolet?style=flat-square)](http://spacemacs.org)
<a href="https://www.instagram.com/alka1e"><img src="https://i.imgur.com/G9YJUZI.png" alt="Instagram" align="right"></a>
<a href="https://twitter.com/alka1e"><img src="http://i.imgur.com/tXSoThF.png" alt="Twitter" align="right"></a>
<a href="https://www.facebook.com/justinekizhak"><img src="http://i.imgur.com/P3YfQoD.png" alt="Facebook" align="right"></a>
<br>

- - -

[![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)](https://opensource.org/licenses/MIT) ![MacOS only](https://img.shields.io/badge/platform-MacOS_only-blue?style=flat-square)

- - -

# Emacs launchers

- - -

## Table of contents

- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
- [Full Documentation](#full-documentation)
  - [FAQ's](#faqs)
- [License](#license)

## Introduction

**MacOS only**

Launchers for Emacs in standard mode, Emacs in daemon mode and Emacs as client.

**[Back to top](#table-of-contents)**

## Features

- No app path required.
You don't have to add path to your emacs application into this app.

- Version agnostic
If you have installed using brew or some other methods then you know if you
upgrade the emacs version will change the application path.
This app doesn't care about that.

- Works with other Emacs applications like `Emacs-plus` etc.
As long as they can be accessed from the terminal using the standard bash
commands.

- Spacemacs icon

**[Back to top](#table-of-contents)**

## Getting Started

Download and copy all three `.app` files into your `Application` directory.

You can launch using double-clicking or using spotlight.

**[Back to top](#table-of-contents)**

## Full Documentation

Apps included:

- `Emacs.app`: Launch the full emacs version.

    This app executes a bash script called `script` with contents

    ```bash
    #!/usr/bin/env bash

    /usr/local/bin/emacs
    ```

- `Emacsserver.app`: Launch only the server. This will create a small textbox
    and print some initializing messages of emacs and the textbox closes. But there
    will be a `emacs --daemon` process running in background.

    This app executes a bash script called `script` with contents

    ```bash
    #!/usr/bin/env bash

    /usr/local/bin/emacs --daemon
    ```

- `Emacsclient.app`: To launch the Emacs "window" or the frame. Use this app.
    But when closing make sure you close only the frame not including the daemon
    instance.

    This app executes a bash script called `script` with contents

    ```bash
    #!/usr/bin/env bash

    /usr/local/bin/emacsclient -a '' -c
    ```

The `Emacsclient.app` can only launch only one frame if no frame is available.
This is because of how MacOS works. MacOS only allows one instance of app to
launch.
But to create more frames then use the command `make-frame` within emacs.
In Spacemacs its `SPC F n`.

To launch more instance of the emacsclient application itself then you can use
the terminal and run `open Emacsclient.app`.

### FAQ's

1. I use emacs-plus but I launch emacs-plus/something-else using separate
alias in my terminal. What are my options?

    If you want to use `Emacs-plus`, then you must make sure its can be launched by running `emacs` on terminal,

    else you have 2 options

    - Create an alias to emacs-plus and assign to `emacs` in your bash profile

    - You will have to modify the contents of the respective `script` file to
    match what you use to launch the app from your terminal.

2. Do I need to use `Emacsserver.app` everytime I start my computer?

    Not really. Unless you want to close and start the daemon instance you don't need this app.

    But you will have to make arrangements to launch emacs deamon some other way.

    I prefer using the system launcher to do that everytime I start my Mac.

    You can run this in your shell to do that.

    ```shell
    ln -sfv /usr/local/opt/emacs*/*.plist ~/Library/LaunchAgents
    launchctl load ~/Library/LaunchAgents/homebrew.mxcl.emacs*.plist
    ```

Visit [website].

Read [CHANGELOG], [CODE OF CONDUCT], [CONTRIBUTING] guide.

[CHANGELOG]: CHANGELOG.md
[CODE OF CONDUCT]: CODE_OF_CONDUCT.md
[CONTRIBUTING]: CONTRIBUTING.md

[website]: (https://justine.kizhak.com/projects/emacs-launchers)

## License

Licensed under the terms of [MIT LICENSE].

[MIT LICENSE]: LICENSE.md

**[Back to top](#table-of-contents)**

- - -

[![forthebadge](https://forthebadge.com/images/badges/makes-people-smile.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/60-percent-of-the-time-works-every-time.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/fo-sho.svg)](https://forthebadge.com)

- - -
