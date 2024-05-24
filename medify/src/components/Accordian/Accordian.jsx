import * as React from 'react';
import { styled } from '@mui/material/styles';
import AddIcon from '@mui/icons-material/Add';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    '&:not(:last-child)': {
        marginBottom: 24,
    },
    '&::before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<AddIcon sx={{ color: 'primary.main'}} />}
        {...props}
    />
))(({ theme }) => ({
    // backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, .05)' : 'rgba(0, 0, 0, .03)',
   
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(45deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: 0,
    },
    padding: 0,
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: 0,
    // borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

const Accordian = ({ data }) => {

    const [ expanded, setExpanded ] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div>
            {data.map((item, index) => (
                <Accordion expanded={expanded === `panel${index}`} onChange={(handleChange(`panel${index}`))} key={index}>
                    <AccordionSummary
                        arial-controls={`panel${index}d-content`}
                        id={`panel${index}d-header`}
                    >
                        <Typography fontSize={18} fontWeight={700} color={'#1B3C74'} lineHeight={1.2}>
                            {item.question}
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography fontSize={14}>
                            {item.answer}
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            ))}
        </div>
    )
}

export default Accordian;