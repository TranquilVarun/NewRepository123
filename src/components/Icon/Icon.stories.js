import { Icon } from ".";

export default {
  title: "Components/Icon",
  component: Icon,
  argTypes: {
    property1: {
      options: ["youtube", "instgram", "facebook", "twitter"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "youtube",
    className: {},
    propertyFacebook:
      "https://generation-sessions.s3.amazonaws.com/a37d40030d2df3439a4157a82115dae7/img/property-1-facebook.svg",
    propertyYoutube:
      "https://generation-sessions.s3.amazonaws.com/a37d40030d2df3439a4157a82115dae7/img/property-1-youtube.svg",
  },
};
