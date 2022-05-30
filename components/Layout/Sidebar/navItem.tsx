import { ReactText } from "react";
import { IconType } from "react-icons";
import { FlexProps, Link, Flex, Icon } from "@chakra-ui/react";

interface NavItemProps extends FlexProps {
  icon: IconType;
  children: ReactText;
  path: string;
}
const NavItem = ({ icon, path, children, ...rest }: NavItemProps) => {
  return (
    <Link
      href={`/${path}`}
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "blue.300",
          color: "white",
          transition: "0.3s ease-in-out",
        }}
        color="gray.300"
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "white",
              transition: "0.3s ease-in-out",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

export default NavItem;
