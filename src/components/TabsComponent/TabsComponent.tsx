'use client';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useState } from 'react';

import './tabsComponent.css';
import AddCollaboratorsManually from '@/collaborators/components/AddCollaboratorsManually/AddCollaboratorsManually';
import AddCollaborators from '@/collaborators/components/AddCollaborators/AddCollaborators';

interface CustomTabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
    className?: string;
}

function CustomTabPanel(props: CustomTabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 2 }}>
                    <Typography component="div">{children}</Typography>
                </Box>
            )}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function TabsComponent() {
    const [value, setValue] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box>
            <div>
                <Tabs value={value} onChange={handleChange}>
                    <Tab className="tabs" label="Importar archivo" {...a11yProps(0)} />
                    <Tab className="tabs" label="Ingresar manualmente" {...a11yProps(1)} />
                </Tabs>
            </div>
            <CustomTabPanel className="panel" value={value} index={0}>
                <AddCollaborators />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <AddCollaboratorsManually />
            </CustomTabPanel>
        </Box>
    );
}
