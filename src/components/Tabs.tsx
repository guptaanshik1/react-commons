import { useMemo, useState } from "react";
import { tabPropsMapper, tabConfig as tc } from "../utils/tabConfig";
import { TTabConfig, TabStates } from "../utils/data";

const Tabs = () => {
  const [tabConfig, setTabConfig] = useState(tc);

  const currentTab = useMemo(
    () => tabConfig?.find((tab) => tab?.state === TabStates.CURRENT),
    [tabConfig]
  );

  const handleTabConfig = (tab: TTabConfig) => {
    setTabConfig((prev) => {
      const indexOfTabClicked = prev?.findIndex((p) => p.label === tab?.label);

      if (indexOfTabClicked !== -1) {
        return prev.map((p, index) => {
          if (indexOfTabClicked === index) {
            return { ...p, state: TabStates.CURRENT };
          } else {
            return { ...p, state: TabStates.PENDING };
          }
        });
      }
      return prev;
    });
  };

  const markComplete = (tab: TTabConfig) => {
    setTabConfig((prev) => {
      const indexOfTabClicked = prev?.findIndex((p) => p.label === tab?.label);

      if (indexOfTabClicked !== -1) {
        return prev.map((p, index) => {
          if (indexOfTabClicked === index) {
            return { ...p, state: TabStates.CURRENT };
          } else {
            return { ...p, state: TabStates.PENDING };
          }
        });
      }
      return prev;
    });
  };

  return (
    <>
      <h1>{currentTab?.label}</h1>
      <div style={{ display: "flex" }}>
        {tabConfig?.map((tab) => {
          return (
            <div
              key={tab?.label}
              style={{
                display: "flex",
                flexDirection: "column",
                margin: "0 10px",
                padding: "0 10px",
                background: "#FFF",
                color: tabPropsMapper?.[tab?.state!]?.color,
                cursor: "pointer",
              }}
              onClick={() => handleTabConfig(tab)}
            >
              <h4>{`${tab?.label} - ${
                tabPropsMapper?.[tab?.state!]?.label
              }`}</h4>
              <button onClick={() => markComplete(tab)}>Mark Complete</button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Tabs;
