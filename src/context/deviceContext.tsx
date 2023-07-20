import { createContext, memo, PropsWithChildren, useCallback, useEffect, useState } from "react";
import defineScreenSize from "utils/defineScreenSize";

interface IDeviceContext {
  device: string;
  setNewDevice(): void;
}

export const DeviceContext = createContext<IDeviceContext>({
  device: "",
  setNewDevice: () => {},
});

export const DeviceProvider = memo(({ children }: PropsWithChildren) => {
  let currentDevice = defineScreenSize();
  const setNewDevice = useCallback(() => {
    const newCurrentDevice = defineScreenSize();
    setDevice(newCurrentDevice);
  }, []);

  useEffect(() => {
    setNewDevice();
    window.addEventListener("resize", setNewDevice);
    return () => window.removeEventListener("resize", setNewDevice);
  }, [setNewDevice]);

  const [device, setDevice] = useState<string>(currentDevice);

  return (
    <DeviceContext.Provider
      value={{
        device,
        setNewDevice,
      }}
    >
      {children}
    </DeviceContext.Provider>
  );
});
