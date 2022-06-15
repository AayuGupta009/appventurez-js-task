// Extended Clock Problem
class MyClock {
  constructor({ temp }) {
    this.template = temp;
  }
  render() {
    const date = new Date();

    var hours = date.getHours();
    if (hours < 10) hours = "0" + hours;

    var mins = date.getMinutes();
    if (mins < 10) mins = "0" + mins;

    var secs = date.getSeconds();
    if (secs < 10) secs = "0" + secs;

    var output = this.template
      .replace("h", hours)
      .replace("m", mins)
      .replace("s", secs)
      .replace("ms", 1000);
      
    console.log(output);
  }

  stop = () => clearInterval(this.timer);
  start = () => {
    this.render();
    this.timer = setInterval(() => this.render(), 1000);
  };
}

class ExtendedClock extends MyClock {
  constructor({ template }) {
    super({ template });
  }
}

let clock = new MyClock({ temp: "h:m:s:ms" });

clock.start();
