import Button from "@mui/material/Button";
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Grid from '@mui/material/Grid';


function App() {
  const businessKeywords = [{ label: "Technology", id: "1" }, { label: "Legal", id: "2" }, { label: "Finance", id: "3" }, { label: "Human Resources", id: "4" }, { label: "Marketing", id: "5" }, { label: "Sales", id: "6" }, { label: "Information Technology", id: "7" }, { label: "Design", id: "8" }, { label: "Manufacturing", id: "9" }, { label: "Logistics", id: "10" }, { label: "Strategy", id: "11" }, { label: "Innovation", id: "12" }, { label: "Accounting", id: "13" }, { label: "Research and Development", id: "14" }, { label: "Product Management", id: "15" }, { label: "Public Relations", id: "16" }, { label: "Retail", id: "17" }, { label: "Project Management", id: "18" }, { label: "Customer Service", id: "19" }, { label: "Operations", id: "20" }, { label: "Quality Assurance", id: "21" }, { label: "Business Development", id: "22" }, { label: "Supply Chain Management", id: "23" }, { label: "Training", id: "24" }, { label: "Data Analysis", id: "25" }, { label: "Social Media", id: "26" }, { label: "Recruiting", id: "27" }, { label: "Risk Management", id: "28" }, { label: "Business Analytics", id: "29" }, { label: "Security", id: "30" },
  { label: "Analytics", id: "31" }, { label: "Leadership", id: "32" }, { label: "Business Intelligence", id: "33" },
  { label: "Data Science", id: "34" }, { label: "AI & Machine Learning", id: "35" }, { label: "Contracts", id: "36" },
  { label: "Litigation", id: "37" }, { label: "Regulatory", id: "38" }, { label: "Corporate Law", id: "39" },
  { label: "Accounting", id: "40" }, { label: "Investment Banking", id: "41" }, { label: "Risk Management", id: "42" },
  { label: "Insurance", id: "43" }, { label: "Recruitment", id: "44" }, { label: "Compensation & Benefits", id: "45" },
  { label: "Employee Relations", id: "46" }, { label: "Organizational Development", id: "47" }, { label: "Advertising", id: "48" },
  { label: "Public Relations", id: "49" }, { label: "Brand Management", id: "50" },
  { label: "Digital Marketing", id: "51" }, { label: "Business Development", id: "52" }, { label: "Lead Generation", id: "53" },
  { label: "Account Management", id: "54" }, { label: "Customer Service", id: "55" }, { label: "Network Administration", id: "56" },
  { label: "System Administration", id: "57" }, { label: "Software Development", id: "58" }, { label: "Database Administration", id: "59" },
  { label: "Graphic Design", id: "60" }, { label: "Interior Design", id: "61" }, { label: "Industrial Design", id: "62" }, { label: "Web Design", id: "63" },
  { label: "Process Engineering", id: "64" }, { label: "Quality Assurance", id: "65" }, { label: "Supply Chain Management", id: "66" }, { label: "Product Design", id: "67" },
  { label: "Shipping & Receiving", id: "68" }, { label: "Inventory Management", id: "69" }, { label: "Transportation", id: "70" }, { label: "Warehousing", id: "71" },
  { label: "Business Planning", id: "72" }, { label: "Market Analysis", id: "73" }, { label: "Financial Planning", id: "74" },
  { label: "Competitive Analysis", id: "75" }, { label: "Product Development", id: "76" }, { label: "Process Improvement", id: "77" },
  { label: "Research & Development", id: "78" }, { label: "Idea Generation", id: "79" }, { label: "Bookkeeping", id: "80" },
  { label: "Financial Analysis", id: "81" }, { label: "Auditing", id: "82" }, { label: "Taxation", id: "83" }, { label: "Experimental Design", id: "84" },
  { label: "Data Analysis", id: "85" }, { label: "Scientific Writing", id: "86" }, { label: "Laboratory Techniques", id: "87" }, { label: "Product Design", id: "88" },
  { label: "Product Testing", id: "89" }, { label: "Product Marketing", id: "90" }, { label: "Product Support", id: "91" }, { label: "Media Relations", id: "92" },
  { label: "Crisis Management", id: "93" }, { label: "Event Planning", id: "94" }, { label: "Social Media", id: "95" },
  { label: "Merchandising", id: "96" }, { label: "Customer Service", id: "97" }, { label: "Store Operations", id: "98" }, { label: "Visual Merchandising", id: "99" },
  { label: "Cyber Security", id: "100" }]
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: '100vh' }}
    >
      <Grid item xs={3}>
        <Paper
          sx={{ width: 'fit-content', margin: 5, padding: 5 }}
        >
          <Autocomplete
            disablePortal
            id="bussines-type"
            options={businessKeywords}
            sx={{ width: 300, margin: 5 }}
            renderInput={(params) => <TextField {...params} label="Business Keyword" />} />
        </Paper>
      </Grid>

    </Grid>
  );
}

export default App;
