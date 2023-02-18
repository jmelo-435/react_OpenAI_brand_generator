import LoadingButton from '@mui/lab/LoadingButton'
import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import Grid from '@mui/material/Grid'
import { useState } from 'react'

function BussinessInfoForm () {
  const [loading, setLoading] = useState(false)
  const businessKeywords = [
    { label: 'Technology', id: '1' },
    { label: 'Legal', id: '2' },
    { label: 'Finance', id: '3' },
    { label: 'Human Resources', id: '4' },
    { label: 'Marketing', id: '5' },
    { label: 'Sales', id: '6' },
    { label: 'Information Technology', id: '7' },
    { label: 'Design', id: '8' },
    { label: 'Manufacturing', id: '9' },
    { label: 'Logistics', id: '10' },
    { label: 'Strategy', id: '11' },
    { label: 'Innovation', id: '12' },
    { label: 'Accounting', id: '13' },
    { label: 'Research and Development', id: '14' },
    { label: 'Product Management', id: '15' },
    { label: 'Public Relations', id: '16' },
    { label: 'Retail', id: '17' },
    { label: 'Project Management', id: '18' },
    { label: 'Customer Service', id: '19' },
    { label: 'Operations', id: '20' },
    { label: 'Quality Assurance', id: '21' },
    { label: 'Business Development', id: '22' },
    { label: 'Supply Chain Management', id: '23' },
    { label: 'Training', id: '24' },
    { label: 'Data Analysis', id: '25' },
    { label: 'Social Media', id: '26' },
    { label: 'Recruiting', id: '27' },
    { label: 'Risk Management', id: '28' },
    { label: 'Business Analytics', id: '29' },
    { label: 'Security', id: '30' },
    { label: 'Analytics', id: '31' },
    { label: 'Leadership', id: '32' },
    { label: 'Business Intelligence', id: '33' },
    { label: 'Data Science', id: '34' },
    { label: 'AI & Machine Learning', id: '35' },
    { label: 'Contracts', id: '36' },
    { label: 'Litigation', id: '37' },
    { label: 'Regulatory', id: '38' },
    { label: 'Corporate Law', id: '39' },
    { label: 'Accounting', id: '40' },
    { label: 'Investment Banking', id: '41' },
    { label: 'Risk Management', id: '42' },
    { label: 'Insurance', id: '43' },
    { label: 'Recruitment', id: '44' },
    { label: 'Compensation & Benefits', id: '45' },
    { label: 'Employee Relations', id: '46' },
    { label: 'Organizational Development', id: '47' },
    { label: 'Advertising', id: '48' },
    { label: 'Public Relations', id: '49' },
    { label: 'Brand Management', id: '50' },
    { label: 'Digital Marketing', id: '51' },
    { label: 'Business Development', id: '52' },
    { label: 'Lead Generation', id: '53' },
    { label: 'Account Management', id: '54' },
    { label: 'Customer Service', id: '55' },
    { label: 'Network Administration', id: '56' },
    { label: 'System Administration', id: '57' },
    { label: 'Software Development', id: '58' },
    { label: 'Database Administration', id: '59' },
    { label: 'Graphic Design', id: '60' },
    { label: 'Interior Design', id: '61' },
    { label: 'Industrial Design', id: '62' },
    { label: 'Web Design', id: '63' },
    { label: 'Process Engineering', id: '64' },
    { label: 'Quality Assurance', id: '65' },
    { label: 'Supply Chain Management', id: '66' },
    { label: 'Product Design', id: '67' },
    { label: 'Shipping & Receiving', id: '68' },
    { label: 'Inventory Management', id: '69' },
    { label: 'Transportation', id: '70' },
    { label: 'Warehousing', id: '71' },
    { label: 'Business Planning', id: '72' },
    { label: 'Market Analysis', id: '73' },
    { label: 'Financial Planning', id: '74' },
    { label: 'Competitive Analysis', id: '75' },
    { label: 'Product Development', id: '76' },
    { label: 'Process Improvement', id: '77' },
    { label: 'Research & Development', id: '78' },
    { label: 'Idea Generation', id: '79' },
    { label: 'Bookkeeping', id: '80' },
    { label: 'Financial Analysis', id: '81' },
    { label: 'Auditing', id: '82' },
    { label: 'Taxation', id: '83' },
    { label: 'Experimental Design', id: '84' },
    { label: 'Data Analysis', id: '85' },
    { label: 'Scientific Writing', id: '86' },
    { label: 'Laboratory Techniques', id: '87' },
    { label: 'Product Design', id: '88' },
    { label: 'Product Testing', id: '89' },
    { label: 'Product Marketing', id: '90' },
    { label: 'Product Support', id: '91' },
    { label: 'Media Relations', id: '92' },
    { label: 'Crisis Management', id: '93' },
    { label: 'Event Planning', id: '94' },
    { label: 'Social Media', id: '95' },
    { label: 'Merchandising', id: '96' },
    { label: 'Customer Service', id: '97' },
    { label: 'Store Operations', id: '98' },
    { label: 'Visual Merchandising', id: '99' },
    { label: 'Cyber Security', id: '100' }
  ]
  const businessTypes = [
    { label: 'Shop', id: '1' },
    { label: 'Site', id: '2' },
    { label: 'Service Provider', id: '3' },
    { label: 'Consultant', id: '4' },
    { label: 'Manufacturer', id: '5' },
    { label: 'Distributor', id: '6' },
    { label: 'Retailer', id: '7' },
    { label: 'Supplier', id: '8' },
    { label: 'Agency', id: '9' },
    { label: 'Investment Firm', id: '10' },
    { label: 'Law Firm', id: '11' },
    { label: 'Startup', id: '12' },
    { label: 'Nonprofit', id: '13' },
    { label: 'Consortium', id: '14' },
    { label: 'Hospital', id: '15' },
    { label: 'University', id: '16' },
    { label: 'Research Institute', id: '17' },
    { label: 'Government Agency', id: '18' },
    { label: 'Insurance Provider', id: '19' },
    { label: 'Financial Institution', id: '20' },
    { label: 'Real Estate Company', id: '21' },
    { label: 'Advertising Agency', id: '22' },
    { label: 'Consulting Firm', id: '23' },
    { label: 'Technology Company', id: '24' },
    { label: 'Recruiting Agency', id: '25' },
    { label: 'Management Company', id: '26' },
    { label: 'Logistics Provider', id: '27' },
    { label: 'Healthcare Provider', id: '28' },
    { label: 'IT Solutions Company', id: '29' },
    { label: 'Software Development Company', id: '30' },
    { label: 'Public Relations Agency', id: '31' },
    { label: 'Marketing Agency', id: '32' },
    { label: 'Data Analysis Company', id: '33' },
    { label: 'Graphic Design Company', id: '34' },
    { label: 'Web Design Company', id: '35' },
    { label: 'Security Company', id: '36' },
    { label: 'Social Media Agency', id: '37' },
    { label: 'Data Science Company', id: '38' },
    { label: 'AI & Machine Learning Company', id: '39' },
    { label: 'Business Analytics Company', id: '40' },
    { label: 'Product Management Company', id: '41' },
    { label: 'Training Company', id: '42' },
    { label: 'Manufacturing Company', id: '43' },
    { label: 'Construction Company', id: '44' },
    { label: 'Transportation Company', id: '45' },
    { label: 'Warehousing Company', id: '46' },
    { label: 'Retail Company', id: '47' },
    { label: 'Project Management Company', id: '48' },
    { label: 'Risk Management Company', id: '49' },
    { label: 'Strategy Consulting Firm', id: '50' },
    { label: 'Innovation Consulting Firm', id: '51' },
    { label: 'Accounting Firm', id: '52' },
    { label: 'Investment Banking Firm', id: '53' },
    { label: 'Business Development Company', id: '54' },
    { label: 'Supply Chain Management Company', id: '55' },
    { label: 'Customer Service Company', id: '56' },
    { label: 'Operations Company', id: '57' },
    { label: 'Quality Assurance Company', id: '58' },
    { label: 'Recruiting Firm', id: '59' },
    { label: 'Real Estate Agency', id: '60' },
    { label: 'Event Planning Company', id: '61' },
    { label: 'Hospitality Company', id: '62' },
    { label: 'Recreation Company', id: '63' },
    { label: 'Media Company', id: '64' },
    { label: 'Advertising Firm', id: '65' },
    { label: 'Public Relations Firm', id: '66' },
    { label: 'Brand Management Company', id: '67' },
    { label: 'Insurance Agency', id: '68' },
    { label: 'Financial Advisory Firm', id: '69' },
    { label: 'Legal Services Firm', id: '70' },
    { label: 'Regulatory Consulting Firm', id: '71' },
    { label: 'Compensation & Benefits Consulting Firm', id: '72' },
    { label: 'Employee Relations Consulting Firm', id: '73' },
    { label: 'Organizational Development Consulting Firm', id: '74' },
    { label: 'Network Administration Company', id: '75' },
    { label: 'System Administration Company', id: '76' },
    { label: 'Database Administration Company', id: '77' },
    { label: 'Graphic Design Agency', id: '78' },
    { label: 'Interior Design Company', id: '79' },
    { label: 'Industrial Design Company', id: '80' },
    { label: 'Web Design Agency', id: '81' },
    { label: 'Process Engineering Company', id: '82' },
    { label: 'Quality Assurance Agency', id: '83' },
    { label: 'Product Design Company', id: '84' },
    { label: 'Shipping & Receiving Company', id: '85' },
    { label: 'Inventory Management Company', id: '86' },
    { label: 'Transportation Agency', id: '87' },
    { label: 'Warehousing Agency', id: '88' },
    { label: 'Business Planning Company', id: '89' },
    { label: 'Market Analysis Company', id: '90' },
    { label: 'Financial Planning Company', id: '91' },
    { label: 'Competitive Analysis Company', id: '92' },
    { label: 'Product Development Company', id: '93' },
    { label: 'Process Improvement Company', id: '94' },
    { label: 'Research & Development Company', id: '95' },
    { label: 'Idea Generation Company', id: '96' },
    { label: 'Bookkeeping Firm', id: '97' },
    { label: 'Financial Analysis Company', id: '98' },
    { label: 'Insurance Brokerage Company', id: '99' },
    { label: 'Business Coaching Company', id: '100' }
  ]
  return (
    <Paper
      sx={{
        margin: 5,
        padding: 5,
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center'
      }}
      component='form'
    >
      <Autocomplete
        disablePortal
        id='bussines-keyword-1'
        options={businessKeywords}
        sx={{ width: 300, margin: 2 }}
        renderInput={params => (
          <TextField {...params} label='Business Keyword 1' required />
        )}
      />
      <Autocomplete
        disablePortal
        id='bussines-keyword-2'
        options={businessKeywords}
        sx={{ width: 300, margin: 2 }}
        renderInput={params => (
          <TextField {...params} label='Business Keyword 2' required />
        )}
      />
      <Autocomplete
        disablePortal
        id='bussines-type'
        options={businessTypes}
        sx={{ width: 300, margin: 2 }}
        renderInput={params => (
          <TextField {...params} label='Business Type' required />
        )}
      />
      <>
        <LoadingButton type='submit' variant='contained' loading={loading} onClick={()=>{setLoading(!loading)}}>
          Submit
        </LoadingButton>
      </>
    </Paper>
  )
}

export default BussinessInfoForm
