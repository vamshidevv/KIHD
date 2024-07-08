import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import HistoryIcon from "@mui/icons-material/History";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Grid from "@mui/material/Grid";
import TablePagination from "@mui/material/TablePagination";

const style = {
  position: "absolute",
  top: "10%",
  left: "50%",
  opacity: 0,
  transform: "translate(-50%, 0%)",
  width: "80%",
  maxWidth: 800,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  maxHeight: "80vh",
  overflow: "auto",
  "&::-webkit-scrollbar": {
    width: "8px",
  },
  "&::-webkit-scrollbar-track": {
    background: "#f1f1f1",
  },
  "&::-webkit-scrollbar-thumb": {
    background: "#888",
    border: "1px solid #f1f1f1",
  },
  "&::-webkit-scrollbar-thumb:hover": {
    background: "#474747c7",
  },
};

const rows = [
  {
    modifiedBy: "Priyanka M",
    assignedTo: "-",
    status: "Closed",
    priority: "P3 - Medium",
    modifiedDate: "20-Jun-2024 04:03 PM",
  },
  {
    modifiedBy: "Srinivas Chudamani",
    assignedTo: "Priyanka M",
    status: "Open",
    priority: "P3 - Medium",
    modifiedDate: "20-Jun-2024 03:47 PM",
  },
  {
    modifiedBy: "Srinivas Chudamani",
    assignedTo: "Priyanka M",
    status: "Approved",
    priority: "P3 - Medium",
    modifiedDate: "20-Jun-2024 03:47 PM",
  },
  {
    modifiedBy: "Priyanka M",
    assignedTo: "Srinivas Chudamani",
    status: "Awaiting For Approval",
    priority: "P3 - Medium",
    modifiedDate: "19-Jun-2024 12:38 PM",
  },
  {
    modifiedBy: "Ravikumar G H",
    assignedTo: "Priyanka M",
    status: "Open",
    priority: "P3 - Medium",
    modifiedDate: "19-Jun-2024 12:17 PM",
  },
  {
    modifiedBy: "Ravikumar G H",
    assignedTo: "Priyanka M",
    status: "Approved",
    priority: "P3 - Medium",
    modifiedDate: "19-Jun-2024 12:17 PM",
  },
  {
    modifiedBy: "Priyanka M",
    assignedTo: "Ravikumar G H",
    status: "Awaiting For Approval",
    priority: "P3 - Medium",
    modifiedDate: "19-Jun-2024 10:46 AM",
  },
  {
    modifiedBy: "Bhaskar C J",
    assignedTo: "Priyanka M",
    status: "Open",
    priority: "P3 - Medium",
    modifiedDate: "19-Jun-2024 10:42 AM",
  },
  {
    modifiedBy: "Keerthana M K",
    assignedTo: "Bhaskar C J",
    status: "Open",
    priority: "P3 - Medium",
    modifiedDate: "19-Jun-2024 10:00 AM",
  },
  {
    modifiedBy: "Nihal Koli Manesh",
    assignedTo: "-",
    status: "Open",
    priority: "P2 - High",
    modifiedDate: "19-Jun-2024 09:59 AM",
  },
];

// Custome  styles

const headingStyle = {
  color: "#000000bd",
  fontWeight: 550,
};
const dataStyle = {
  color: "#000000bd",
};

export default function TicketHistory() {
  const [open, setOpen] = React.useState(false);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
      <Button
        onClick={handleOpen}
        variant="contained"
        sx={{
          marginTop: "40px",
          marginBottom: "10px",
          fontWeight: "500",
          backgroundColor: "#2e5c9e",
          padding: "10px 5px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "12px",
          "&:hover": { backgroundColor: "#2e5c9ecc" },
        }}
      >
        <HistoryIcon
          sx={{
            color: "#fff",
            fontSize: "1.2rem",
          }}
        />{" "}
        Ticket History
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
        style={{}}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Grid
              container
              mb={1}
              spacing={2}
              justifyContent="space-between"
              alignItems="center"
            >
              <Grid item>
                <Typography
                  id="transition-modal-title"
                  variant="h6"
                  component="h2"
                  sx={{
                    color: "#474747",
                    fontWeight: "500",
                  }}
                >
                  Ticket History - 131608
                </Typography>
              </Grid>
              <Grid item>
                <IconButton
                  onClick={handleClose}
                  sx={{
                    backgroundColor: "transparent",
                    "&:hover": { color: "#2e5c9e" },
                  }}
                >
                  <CloseIcon />
                </IconButton>
              </Grid>
            </Grid>
            <Box mb={3} sx={{ border: "1px solid #cccccc7d" }}></Box>
            <TableContainer component={Paper} sx={{ boxShadow: "none" }}>
              <Table>
                <TableHead sx={{ backgroundColor: "#fafafa" }}>
                  <TableRow>
                    <TableCell sx={headingStyle}>Modified By</TableCell>
                    <TableCell sx={headingStyle}>Assigned To</TableCell>
                    <TableCell sx={headingStyle}>Status</TableCell>
                    <TableCell sx={headingStyle}>Priority</TableCell>
                    <TableCell sx={headingStyle}>Modified Date</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row, index) => (
                      <TableRow
                        key={index}
                        sx={{ "&:hover": { backgroundColor: "#fafafa" } }}
                      >
                        <TableCell sx={dataStyle}>{row.modifiedBy}</TableCell>
                        <TableCell sx={dataStyle}>{row.assignedTo}</TableCell>
                        <TableCell sx={dataStyle}>{row.status}</TableCell>
                        <TableCell sx={dataStyle}>{row.priority}</TableCell>
                        <TableCell sx={dataStyle}>{row.modifiedDate}</TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[5, 10, 15]}
              component="div"
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Box>
        </Fade>
      </Modal>
    </>
  );
}
