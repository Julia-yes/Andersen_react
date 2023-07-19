import { ScreenSizes } from "enums/sizes";
import { DeviceType } from "enums/deviceType";

const defineScreenSize = () => {
  const screenWidth = window.innerWidth;
  if (screenWidth < ScreenSizes.SMALL) {
    return DeviceType.PHONE;
  } else if (screenWidth >= ScreenSizes.EXTRA_SMALL && screenWidth < ScreenSizes.MEDIUM) {
    return DeviceType.TAB;
  } else {
    return DeviceType.DESKTOP;
  }
};

export default defineScreenSize;
