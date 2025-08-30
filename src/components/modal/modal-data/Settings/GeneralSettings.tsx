import DropDown from "@/components/Input/DropDown";
import Switch from "@/components/Input/Switch";
import { useTheme } from "@/context/ThemeProvider";
import { useState } from "react";

const GeneralSettings = () => {
  const { theme, setTheme } = useTheme();
  const [enabled, setEnabled] = useState(true);

  return (
    <ul className="leading-8 my-4">
      <li className="flex items-center justify-between pb-2 border-b">
        <p>Theme</p>
        <DropDown
          value={theme}
          options={["system", "light", "dark"]}
          variant="ghost"
          setValue={setTheme}
        />
      </li>
      <li className="flex items-center justify-between pt-2 pb-2 border-b">
        <p>Language</p>
        <DropDown
          value={"auto-detect"}
          options={["auto-detect", "English", "Hindi"]}
          variant="ghost"
        />
      </li>
      <li className="pt-2 pb-2 border-b">
        <div className="flex items-center justify-between">
          <p>Spoken Language</p>
          <DropDown
            value={"auto-detect"}
            options={["auto-detect", "English", "Hindi"]}
            variant="ghost"
          />
        </div>
        <p className="text-sm pt-2">
          For best results, select the language you mainly speak. If it's not
          listed, it may still be supported via auto-detection.
        </p>
      </li>
      <li className="pt-2 pb-2">
        <div className="flex items-center justify-between">
          <p>Show follow up suggestions in chats</p>
          <Switch enabled={enabled} setEnabled={setEnabled} />
        </div>
      </li>
    </ul>
  );
};

export default GeneralSettings;
