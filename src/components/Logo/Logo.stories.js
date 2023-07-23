import { Logo } from ".";

export default {
  title: "Components/Logo",
  component: Logo,
  argTypes: {
    property1: {
      options: ["twenty-four-px", "forty-eight-px", "sixty-four-px", "thirty-six-px", "fifty-six-px"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "twenty-four-px",
    className: {},
    property: "https://generation-sessions.s3.amazonaws.com/a37d40030d2df3439a4157a82115dae7/img/property-1-48px.svg",
    propertyPx: "https://generation-sessions.s3.amazonaws.com/a37d40030d2df3439a4157a82115dae7/img/property-1-36px.svg",
  },
};
