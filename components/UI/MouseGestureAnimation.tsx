import React from "react";

const leavingSpringConfig = { stiffness: 60, damping: 15 };

export default class Demo extends React.Component {
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = { mouse: [], now: "t" + 0 };
  }

  handleMouseMove = ({ pageX, pageY }: any) => {
    // Make sure the state is queued and not batched.
    this.setState(() => {
      return {
        mouse: [pageX - 25, pageY - 25],
        now: "t" + Date.now(),
      };
    });
  };

  handleTouchMove = (e: { preventDefault: () => void; touches: any[] }) => {
    e.preventDefault();
    this.handleMouseMove(e.touches[0]);
  };

  render() {
    return <></>;
  }
}
