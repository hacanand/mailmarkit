import useSettingsFilter from "@/shared/hooks/useSettingsFilter";
import { Tab, Tabs } from "@nextui-org/react";
import React, { Key } from "react";

const SettingTabs = () => {
    const { activeItem, setActiveItem } = useSettingsFilter();
        return (
          <Tabs
            variant={"underlined"}
            aria-label="Tabs-variants"
            selectedKey={activeItem}
            onSelectionChange={(key: Key) => setActiveItem(key as string)}
          >
            <Tab key="API Access" title="API Access" />
            <Tab key="Customize Profile" title="Customize Profile" />
          </Tabs>
        );
        
};

export default SettingTabs;
