# chat-app

## Build a live comments application using Ember.js and Pusher
This project contains the source code for a very simple realtime comment application with sentiment analysis.

Take a look at the image below.


![ezgif com-video-to-gif 4](https://user-images.githubusercontent.com/19610753/41457790-b13b0faa-707c-11e8-96f1-a2e735fca421.gif)


## Prerequisites
1. You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

2. Create a Pusher application - Create a new application on your Pusher Dashboard to get your app credentials.

## Getting Started

### Clone the repository
```bash
$ git clone https://github.com/yemiwebby/live-comments-ember.git
```

### Change directory
```bash
$ cd live-comments-ember
```

### Run the application
```bash
$ ember serve
```

* Visit your app at [http://localhost:4200](http://localhost:4200).

## Built With

* [Emberjs](https://www.emberjs.com/) - A productive frontend framework built for ambitious web developers.

* [Pusher](https://pusher.com/) - A Node.js client to interact with the Pusher REST API

* [Sentiment](https://github.com/thisandagain/sentiment)- Sentiment is a module that uses the AFINN-165 wordlist and Emoji Sentiment Ranking to perform sentiment analysis on arbitrary blocks of input text.


### Building

* `ember build` (development)
* `ember build --environment production` (production)