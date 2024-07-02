import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import IconButton from "@mui/material/IconButton";
import VisibilityIcon from "@mui/icons-material/Visibility";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import withResponsiveDrawer from "./withResponsiveDrawer";

const columns = [
  { id: "ticketId", label: "Ticket ID", minWidth: 100 },
  { id: "requestedDate", label: "Requested Date", minWidth: 150 },
  { id: "category", label: "Category", minWidth: 150 },
  { id: "subcategory", label: "Subcategory", minWidth: 150 },
  { id: "subject", label: "Subject", minWidth: 200 },
  { id: "status", label: "Status", minWidth: 100 },
  { id: "action", label: "Action", minWidth: 100 },
];

const rows = [
  {
    ticketId: "131608",
    requestedDate: "19-Jun-2024 09:59 AM",
    category: "USB/Admin Access",
    subcategory: "Renewal of Admin Rights",
    subject: "Request for New Admin Access Password",
    status: "Closed",
  },
  {
    ticketId: "130972",
    requestedDate: "12-Jun-2024 09:32 AM",
    category: "AD Account",
    subcategory: "Password Reset",
    subject: "Reset or Unlock the account",
    status: "Closed",
  },
  {
    ticketId: "126359",
    requestedDate: "30-Apr-2024 10:10 AM",
    category: "AD Account",
    subcategory: "Password Reset",
    subject: "Reset or Unlock the account",
    status: "Closed",
  },
  {
    ticketId: "124862",
    requestedDate: "16-Apr-2024 10:00 AM",
    category: "Access Review	",
    subcategory: "Admin Rights",
    subject: "Request for New Admin Access Password",
    status: "Closed",
  },
  {
    ticketId: "121737	",
    requestedDate: "18-Mar-2024 03:24 PM",
    category: "AD Account	",
    subcategory: "Password Reset",
    subject: "Reset or Unlock the account",
    status: "Closed",
  },
  {
    ticketId: "119701",
    requestedDate: "28-Feb-2024 05:19 PM",
    category: "VPN",
    subcategory: "Create New VPN Account",
    subject: "Request for VPN Access Assistance",
    status: "Closed",
  },
  {
    ticketId: "119611",
    requestedDate: "28-Feb-2024 10:21 AM",
    category: "VPN",
    subcategory: "Create New VPN Account",
    subject: "Request for Tactine VPN Installation and Access",
    status: "Closed",
  },
  {
    ticketId: "119576",
    requestedDate: "27-Feb-2024 06:10 PM	",
    category: "USB/Admin Access",
    subcategory: "Admin Rights Request",
    subject: "Request for Admin Access Control",
    status: "Closed",
  },
  {
    ticketId: "119548",
    requestedDate: "27-Feb-2024 04:10 PM",
    category: "Access Control	",
    subcategory: "Biometric",
    subject: "Request for Admin Access Control",
    status: "Closed",
  },
  // Add more rows as needed
];

const MyTickets = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [status, setStatus] = React.useState("All");

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  return (
    <Box
      sx={{
        backgroundColor: "white",
        marginBottom: "100px",
        marginTop: "20px",
        marginRight: { xs: "0px", sm: "0px", md: "0px", lg: "80px" },
        padding: 3,
      }}
    >
      <Box sx={{ padding: 2, backgroundColor: "#ffffff" }}>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item>
            <Typography variant="h6">My Tickets (9)</Typography>
          </Grid>
          <Grid item>
            <Button variant="contained" color="primary">
              Submit a Ticket
            </Button>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          paddingBottom: 2,
          backgroundColor: "#fff",
          borderRadius: "8px 8px 0 0",
        }}
      >
        <Grid container alignItems="center" spacing={2}>
          <Grid item>
            <Typography variant="body1" sx={{ fontWeight: "bold" }}>
              Status:
            </Typography>
          </Grid>
          <Grid item>
            <FormControl sx={{ minWidth: 300 }}>
              <Select value={status} onChange={handleStatusChange}>
                <MenuItem value="All">All</MenuItem>
                {/* <MenuItem value="Open">Open</MenuItem> */}
                <MenuItem value="Closed">Closed</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Box>

      <TableContainer
        sx={{
          marginTop: 2,
          borderRadius: "5px 5px 0 0",
          border: "1px solid #e0e0e0",
          "@media (max-width: 600px)": {
            overflowX: "auto",
            maxHeight: "none",
          },
          "@media (min-width: 600px)": {
            maxHeight: 440,
          },
        }}
      >
        <Grid
          container
          spacing={2}
          sx={{
            height: "60px",
            backgroundColor: "#e5ebf2",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Grid item xs={12}>
            <Typography variant="body2">
              Filter data (
              <span
                style={{
                  color: "#0AB56D",
                  fontSize: "1rem",
                  fontWeight: "600",
                }}
              >
                9
              </span>{" "}
              / 9)
            </Typography>
          </Grid>
        </Grid>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align="left"
                  style={{
                    minWidth: column.minWidth,
                    backgroundColor: "#f2f2f2",
                  }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <TableRow
                  hover
                  role="checkbox"
                  tabIndex={-1}
                  key={row.ticketId}
                >
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align="left">
                        {column.id === "action" ? (
                          <>
                            <IconButton aria-label="view">
                              <VisibilityIcon />
                            </IconButton>
                            <IconButton aria-label="duplicate">
                              <FileCopyIcon />
                            </IconButton>
                          </>
                        ) : (
                          value
                        )}
                      </TableCell>
                    );
                  })}
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        sx={{
          ".MuiTablePagination-root": {
            borderTop: "1px solid #e0e0e0",
            padding: 2,
            backgroundColor: "#f5f5f5",
          },
          ".MuiTablePagination-spacer": {
            display: "none",
          },
          ".MuiTablePagination-actions": {
            marginRight: 2,
          },
          ".MuiTablePagination-caption": {
            marginRight: 2,
          },
        }}
      />
    </Box>
  );
};
export default withResponsiveDrawer(MyTickets);
