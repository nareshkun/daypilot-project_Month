import React, { Component } from "react";
import { DayPilot, DayPilotMonth } from "daypilot-pro-react";

class Month extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locale: "en-gb",
      viewType: "Month",
      theme: "month_traditional",
      durationBarVisible: true,
      showWeekend: true,
      timeRangeSelectedHandling: "Disabled",
      eventDeleteHandling: "Disabled",
      eventMoveHandling: "Update",
      onEventMoved: function (args) {
        this.message("Event moved");
      },
      eventResizeHandling: "Update",
      onEventResized: function (args) {
        this.message("Event resized");
      },
      eventClickHandling: "Disabled",
      eventHoverHandling: "Disabled",
      onBeforeEventRender: (args) => {
        debugger;
        //args.data.barColor = "#93c47d";
        args.data.barHidden = false;
        args.data.fontColor = "black";
        args.data.height = 170;

        args.e.cssClass = args.data.status;
        args.data.areas = [
          {
            right: 80,

            width: 17,
            height: 170,
            html: ` <div  style="float:left"><a style="float:left" href="#">apply leave</a><img style="float:left" src="http://icons.iconarchive.com/icons/kyo-tux/delikate/512/Info-icon.png" style="
            height: 150px;"></div>`,
            // onClick: (args) => this.showDetails(args.source),
          },
        ];
      },
    };
  }

  componentDidMount() {
    // load resource and event data
    this.setState({
      startDate: DayPilot.Date.today(),
      events: [
        {
          id: 1,
          text: "Event 1",
          start: DayPilot.Date.today(),
          end: DayPilot.Date.today().addDays(1),
          //backColor: "#38761d",
          status: "Absent",
        },
        {
          id: 2,
          text: "Event 2",
          start: "2020-09-10T00:00:00",
          end: "2020-09-10T00:00:00",
          borderColor: "#38761d",
          // backColor: "#93c47d",
          status: "Present",
        },
      ],
    });
  }

  render() {
    var { ...config } = this.state;
    return (
      <div>
        <DayPilotMonth
          {...config}
          ref={(component) => {
            this.calendar = component && component.control;
          }}
        />
      </div>
    );
  }
}

export default Month;
