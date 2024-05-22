import { TabPanel } from "./TabPanel"
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Box } from '@mui/material';
import { useState } from "react";

interface TabInput {
    labels: string[],
    Children: React.FC[]
}
const TabX = (props: TabInput) => {
    const [value, setValue] = useState<any>(0);
    const { labels, Children } = props;

    const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <div className="tab-container">
            <Box>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" className="user-tabs">
                    {labels.map((label, index) => (
                        <Tab label={label} className="user-tab" disableRipple />
                    ))}
                </Tabs>
            </Box>
            <Box sx={{ width: '100%' }} className="user-form-container">
                {Children.map((Child: any, index: any) => (
                    <TabPanel value={value} index={index}>
                        <Child />
                    </TabPanel>
                ))}
            </Box>
        </div>
    )
}

export default TabX
