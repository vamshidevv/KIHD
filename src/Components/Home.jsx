import { Container, Grid } from "@mui/material";
import SignIn from "./SignIn";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import NavBar from "./NavBar";
import Footer from "./Footer";

const Home = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <NavBar />
      <section className="home-section" style={{ height: "100vh" }}>
        <div className="heading">
          <h3 className="wlcm-txt">Welcome to KoliInfotech Helpdesk (KIHD)</h3>
          <p className="text">IT, HR, Admin, DevOps/Release Engineering</p>
        </div>

        <Container
          maxWidth="l"
          sx={{
            width: "100%",
            px: { xs: 0, sm: 0, md: 0, lg: 3 },
          }}
        >
          <Grid
            container
            spacing={2}
            direction={isSmallScreen ? "column" : "row"}
          >
            <Grid
              item
              xs={12}
              sm={6}
              lg={8}
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              <div className="aside-txt" style={{ padding: "16px" }}>
                <p
                  style={{
                    paddingBottom: "16px",
                    fontWeight: "300",
                    fontSize: "1rem",
                  }}
                >
                  <strong>Important Information:</strong>
                </p>
                <ul className="key-points">
                  <li>
                    KoliInfotech Helpdesk (KIHD) is a tool, providing
                    centralised support service for our work needs.
                  </li>
                  <li>
                    KIHD is a one stop solution platform for issues related to -
                    IT, HR, Admin, DevOps/Release Engineering
                  </li>
                  <li>
                    To login to KoliInfotech Helpdesk application, associates
                    shall use same <strong>login name and password </strong>
                    which is used to login to koliinfotech.com.
                  </li>
                  <li>
                    For any <strong>technical issues </strong>with the
                    application please contact the support team at{" "}
                    <a id="mail" href="mailto:info@koliinfotech.com">
                      info@koliinfotech.com
                    </a>
                  </li>
                  <li>
                    For any <strong>login issue </strong>please contact the
                    Systems team at{" "}
                    <a id="mail" href="mailto:info@koliinfotech.com">
                      info@koliinfotech.com
                    </a>
                  </li>
                </ul>
              </div>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              lg={4}
              sx={{
                my: { xs: 0, sm: 0, lg: 0 },
              }}
            >
              <div className="form ">
                <SignIn />
              </div>
            </Grid>
          </Grid>
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default Home;
