import * as React from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  IconButton,
  Select,
  MenuItem,
  Button,
  Typography,
  Grid,
  FormControl,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import withResponsiveDrawer from "./withResponsiveDrawer";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const columns = [
  { id: "ticketId", label: "Ticket ID", minWidth: 100 },
  { id: "requestedDate", label: "Requested Date", minWidth: 150 },
  { id: "category", label: "Category", minWidth: 150 },
  { id: "subcategory", label: "Subcategory", minWidth: 150 },
  { id: "subject", label: "Subject", minWidth: 200 },
  { id: "status", label: "Status", minWidth: 100 },
  { id: "action", label: "Action", minWidth: 100 },
];

const MyTickets = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [status, setStatus] = useState("All");
  const [ticketData, setTicketData] = useState([]);

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

  const handleViewDetails = () => {
    sessionStorage.setItem("canNavigate", "true");
    navigate("/viewticketdetails");
  };

  useEffect(() => {
    axios
      .get("http://localhost:3000/ticketdetails")
      .then((response) => {
        const mappedData = response.data.map((ticket) => ({
          ...ticket,
          ticketId: ticket.id,
          requestedDate: ticket.RequestedDate,
        }));
        setTicketData(mappedData);
        console.log("get ticket data:", mappedData);
      })
      .catch((error) => {
        console.error("Error getting ticket data:", error);
      });
  }, []);

  return (
    <Box
      sx={{
        backgroundColor: "white",
        marginBottom: "100px",
        marginTop: "20px",
        marginRight: { xs: "0px", sm: "0px", md: "0px", lg: "80px" },
        padding: 3,
        width: "100%",
      }}
    >
      <Box sx={{ padding: 2, backgroundColor: "#ffffff" }}>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item>
            <Typography variant="h6">
              My Tickets ({ticketData.length})
            </Typography>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#2e5c9e",
                "&:hover": { backgroundColor: "#2e5c9ecc" },
              }}
              onClick={() => navigate("/submitticket")}
            >
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
            <FormControl sx={{ minWidth: 300, height: "40px" }}>
              <Select
                value={status}
                onChange={handleStatusChange}
                sx={{ height: "38px" }}
              >
                <MenuItem value="All">All</MenuItem>
                <MenuItem value="Closed">Closed</MenuItem>
                <MenuItem value="Open">Open</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ overflowX: "auto", marginTop: 2 }}>
        <TableContainer
          sx={{
            borderRadius: "5px 5px 0 0",
            border: "1px solid #e0e0e0",
            minWidth: "1000px",
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
              minWidth: "100%",
              paddingLeft: 2,
            }}
          >
            <Grid item xs={12} sx={{ position: "sticky" }}>
              <Typography variant="body2" sx={{ color: "#6A6A6A" }}>
                Filter data (
                <span
                  style={{
                    color: "#0AB56D",
                    fontSize: "1rem",
                    fontWeight: "600",
                  }}
                >
                  {Math.max(
                    0,
                    Math.min(
                      rowsPerPage,
                      ticketData.length - page * rowsPerPage
                    )
                  )}
                </span>{" "}
                / {ticketData.length})
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
                    <p
                      style={{
                        color: "#474747",
                        fontWeight: "600",
                        letterSpacing: "0.5px",
                      }}
                    >
                      {column.label}
                    </p>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {ticketData
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => (
                  <TableRow
                    role="checkbox"
                    tabIndex={-1}
                    key={row.ticketId}
                    sx={{ "&:hover": { backgroundColor: "#f2f2f266" } }}
                  >
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell
                          key={column.id}
                          align="left"
                          sx={{
                            minWidth: column.minWidth,
                            borderRight: "0.1px solid #f2f2f2",
                            color: "#4B4B4B",
                          }}
                        >
                          {column.id === "action" ? (
                            <>
                              <IconButton aria-label="view" title="View Ticket">
                                <VisibilityIcon
                                  sx={{ color: "#2e5c9e" }}
                                  onClick={handleViewDetails}
                                />
                              </IconButton>
                              <IconButton aria-label="duplicate" title="Clone">
                                <i
                                  className="far fa-clone"
                                  style={{ color: "#2e5c9e" }}
                                ></i>
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
      </Box>
      <TablePagination
        rowsPerPageOptions={[10, 20, 25, 30, 50, 100]}
        component="div"
        count={ticketData.length}
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
