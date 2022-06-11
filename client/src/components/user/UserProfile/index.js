import {
  Avatar,
  Text,
  Flex,
  Heading,
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  useToast,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import Layout from "../../admin/Layout";
import {
  changeDetails,
  changePassword,
  reset,
} from "../../../features/authSlice";

function UserProfile() {
  const user = useSelector((state) => state.auth && state.auth.user?.user);
  const dispatch = useDispatch();
  const toast = useToast();
  const navigate = useNavigate();

  const [info, setInfo] = useState({
    phone: user?.phone,
    address: user?.address,
  });
  const [passwordDetails, setPasswordDetails] = useState({
    old_password: "",
    new_password: "",
    confirm_password: "",
  });

  const changeHandler = (e) => {
    setInfo({ ...info, [e.target.id]: e.target.value });
  };
  const passChangeHandler = (e) => {
    setPasswordDetails({ ...passwordDetails, [e.target.id]: e.target.value });
  };
  const submitChangeInfo = (e) => {
    e.preventDefault();
    dispatch(changeDetails({ id: user.id || user._id, info })).then((data) => {
      if (data.hasOwnProperty("error")) {
        toast({
          title: "Failed",
          description: data.payload.message,
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      } else {
        toast({
          title: "Done",
          description: "user details changed successfully",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      }
    });
  };
  const submitChangePassword = (e) => {
    e.preventDefault();
    const { old_password, new_password, confirm_password } = passwordDetails;
    const passwords = {
      old_password,
      new_password,
    };
    if (new_password !== confirm_password) {
      toast({
        title: "Failed",
        description: "new and confirm password should match",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } else {
      const passwordRegex =
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/;
      if (!new_password.match(passwordRegex)) {
        toast({
          title: "Password Invalid!",
          description:
            "must be 6 digit and should consist of number and symbols",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      } else {
        dispatch(changePassword({ id: user.id || user._id, passwords })).then(
          (data) => {
            if (data.hasOwnProperty("error")) {
              toast({
                title: "Failed",
                description: data.payload.message,
                status: "error",
                duration: 3000,
                isClosable: true,
              });
            } else {
              toast({
                title: "Password Changed Successfully",
                description: "please login again",
                status: "success",
                duration: 3000,
                isClosable: true,
              });
              setTimeout(() => {
                dispatch(reset());
                navigate("/auth/login", { replace: true });
              }, 3000);
            }
          }
        );
      }
    }
  };

  return (
    <Layout title="Profile">
      <Flex
        w="100%"
        mt="5rem"
        flexWrap={"wrap"}
        direction="column"
        align="center"
      >
        <Avatar
          size="2xl"
          name="Ujjwal Basnet"
          src="https://bit.ly/code-beast"
        />
        <Heading
          as="h2"
          fontSize={{ base: "0.9rem", sm: "1rem", md: "1rem", lg: "1.5rem" }}
          mt="1rem"
        >
          {user?.name}
        </Heading>
        <Text
          fontSize={{ base: "0.9rem", sm: "0.9rem", md: "1rem", lg: "1rem" }}
          color="#b5b4b4"
        >
          myemail@gmail.com
        </Text>
        <Box w={{ base: "100%", sm: "80%", md: "50%", lg: "50%" }} mt="2rem">
          <FormControl>
            <FormLabel htmlFor="phone">Phone</FormLabel>
            <Input
              id="phone"
              type="number"
              onChange={changeHandler}
              defaultValue={info.phone}
            />
          </FormControl>
          <FormControl mt="1rem">
            <FormLabel htmlFor="address">Address</FormLabel>
            <Input
              id="address"
              type="text"
              onChange={changeHandler}
              defaultValue={info.address}
            />
          </FormControl>
          <Button
            variant="primary-btn"
            mt="1rem"
            w="100%"
            onClick={submitChangeInfo}
          >
            Change Details
          </Button>
        </Box>
        <Box w={{ base: "100%", sm: "80%", md: "50%", lg: "50%" }} mt="1rem">
          <FormControl>
            <FormLabel htmlFor="old_password">Old Password</FormLabel>
            <Input
              id="old_password"
              type="password"
              onChange={passChangeHandler}
              defaultValue={passwordDetails.old_password}
            />
          </FormControl>
          <FormControl mt="1rem">
            <FormLabel htmlFor="new_password">New Password</FormLabel>
            <Input
              id="new_password"
              type="password"
              onChange={passChangeHandler}
              defaultValue={passwordDetails.new_password}
            />
          </FormControl>
          <FormControl mt="1rem">
            <FormLabel htmlFor="confirm_password">
              Confirm New Password
            </FormLabel>
            <Input
              id="confirm_password"
              type="password"
              onChange={passChangeHandler}
              defaultValue={passwordDetails.confirm_password}
            />
          </FormControl>
          <Button
            variant="primary-btn"
            mt="1rem"
            w="100%"
            onClick={submitChangePassword}
          >
            Change Password
          </Button>
        </Box>
      </Flex>
    </Layout>
  );
}

export default UserProfile;
