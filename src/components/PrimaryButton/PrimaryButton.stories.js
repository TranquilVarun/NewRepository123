import { PrimaryButton } from ".";

export default {
  title: "Components/PrimaryButton",
  component: PrimaryButton,
  argTypes: {
    property1: {
      options: ["yellow", "green"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "yellow",
    className: {},
    signUpClassName: {},
  },
};
