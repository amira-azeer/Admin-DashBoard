import { Box, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { tokens } from "../../theme";
import { mockDataContacts } from "../../data/mockData";
import Header from "../../components/header";

const Contacts = () => {
    const theme = useTheme();
    const colours = tokens(theme.palette.mode);

    const columns = [
        {field: "id", headerName:"ID", flex: 0.5},
        {fiels: "registrarId", headerName: "Registrar ID"},
        {field: "name", headerName:"Name", flex: 1, cellClassName: "name-column--cell"},
        {field: "age", headerName:"Age", type:"number",}, //  headerAligh:"left", align:"left", flex: 1
        {field: "phone", headerName:"Phone Number", flex: 1},
        {field: "email", headerName:"Email", flex: 1},
        {field: "address", headerName:"Address"},
        {field: "city", headerName:"City"},
        {field: "zipCode", headerName:"ZipCode"},
    ]
 
    return (
        <Box m="20px" >
            <Header title="CONTACTS" subtitle="List of Contacts for Future Reference"/>
            <Box m="40px 0 0 0" height="75vh" sx={{ 
                "& .MuiDataGrid-root": {
                    border: "none"
                },
                "& .MuiDataGrid-cell": {
                    borderBottom: "none"
                },
                "& .name-column--cell": {
                    color: colours.greenAccent[300]
                },
                "& .MuiDataGrid-columnHeaders": {
                    background: colours.blueAccent[700],
                    borderBottom: "none"
                },
                "& .MuiDataGrid-virtualScroller": {
                    backgroundColor: colours.primary[400],
                },
                "& .MuiDataGrid-footerContainer": {
                    borderTop: "none",
                    backgroundColor: colours.blueAccent[700],
                },
                "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                    color: `${colours.grey[100]} !important` 
                }
            }}>
                <DataGrid
                    rows={mockDataContacts}
                    columns={columns}
                    components={{ Toolbar: GridToolbar}}
                />
            </Box>
        </Box>
    )
}

export default Contacts;



