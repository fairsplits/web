import { useState } from "react";
import {
  Container,
  Paper,
  TextField,
  Button,
  Grid,
  IconButton,
  InputAdornment,
} from "@mui/material";
import {
  Person as PersonIcon,
  Email as EmailIcon,
  Phone as PhoneIcon,
  Lock as LockIcon,
  Visibility as VisibilityIcon,
  VisibilityOff as VisibilityOffIcon,
} from "@mui/icons-material";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { emailSchema, passwordSchema, phoneNumberSchema } from "../../constants/common-schemas";
import { useSignupMutation } from "../../queries/auth/auth.queries";
import { sanitizePhoneNumber } from "../../utils/number.utils";
import { ErrorMessage } from "../../components/form/error-msg";
import { useNavigate } from "react-router";

const SignupSchema = z.object({
  firstName: z.string({ message: "First name is required" }),
  lastName: z.string({ message: "Last name is required" }),
  email: emailSchema,
  phoneNo: phoneNumberSchema,
  password: passwordSchema,
});
type SignUpSchemaType = z.infer<typeof SignupSchema>;

export function SignupPage() {
  let navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpSchemaType>({
    resolver: zodResolver(SignupSchema),
  });

  const [showPassword, setShowPassword] = useState(false);

  const {
    mutateAsync: createUser,
    isPending: isSigningUp,
    error: createUserError,
  } = useSignupMutation();

  const onSubmit = (data: SignUpSchemaType) => {
    const { phoneNo } = data;

    const sanitizedPhoneNo = sanitizePhoneNumber(phoneNo);

    createUser({ ...data, phoneNo: sanitizedPhoneNo }).then(() => {
      navigate("/install");
    });
  };

  return (
    <div className="bg-Schemes-Background w-full h-screen flex flex-col items-center justify-center">
      <img src="/fs-logo-large.png" className="mb-8 w-80" />

      <Container maxWidth="sm">
        <Paper
          elevation={2}
          sx={{
            p: { xs: 2, sm: 4 },
            borderRadius: 2,
          }}
        >
          <h4 className="mb-8 text-center text-2xl">Create account</h4>

          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  {...register("firstName")}
                  fullWidth
                  name="firstName"
                  label="First Name"
                  required
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PersonIcon color="action" />
                      </InputAdornment>
                    ),
                  }}
                  variant="standard"
                />
                <ErrorMessage>{errors.firstName?.message}</ErrorMessage>
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  {...register("lastName")}
                  fullWidth
                  name="lastName"
                  label="Last Name"
                  required
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PersonIcon color="action" />
                      </InputAdornment>
                    ),
                  }}
                  variant="standard"
                />
                <ErrorMessage>{errors.lastName?.message}</ErrorMessage>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  {...register("email")}
                  fullWidth
                  name="email"
                  label="Email Address"
                  type="email"
                  required
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <EmailIcon color="action" />
                      </InputAdornment>
                    ),
                  }}
                  variant="standard"
                />
                <ErrorMessage>{errors.email?.message}</ErrorMessage>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  {...register("phoneNo")}
                  fullWidth
                  name="phoneNo"
                  label="Phone Number"
                  required
                  type="tel"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PhoneIcon color="action" />
                      </InputAdornment>
                    ),
                  }}
                  variant="standard"
                />
                <ErrorMessage>{errors.phoneNo?.message}</ErrorMessage>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  {...register("password")}
                  fullWidth
                  name="password"
                  label="Password"
                  type={showPassword ? "text" : "password"}
                  required
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockIcon color="action" />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                          {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  variant="standard"
                />
                <ErrorMessage>{errors.password?.message}</ErrorMessage>
              </Grid>

              <Grid item xs={12}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  size="large"
                  disabled={isSigningUp}
                  sx={{
                    mt: 3,
                    mb: 2,
                    borderRadius: 2,
                    textTransform: "none",
                    fontSize: "1rem",
                  }}
                >
                  Sign Up
                </Button>

                <ErrorMessage>{createUserError?.message}</ErrorMessage>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Container>
    </div>
  );
}
