import { Button } from "./Mobile";

export default {
  component: Button,
  title: "Mobile/Button",
  tags: ["autodocs"],
};

export const Primary = {
  args: {
    text: "ButtonPrimary",
    onPress: () => {
      console.log("pressed");
    },
  },
};
