import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const SortSelector = ({
  onSelectSort,
  selectedSort,
}: {
  onSelectSort: (order: string) => void;
  selectedSort: string;
}) => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "name", label: "name" },
    { value: "-added", label: "Date Added" },
  ];

  const currentSortOrder = sortOrders.find(
    (order) => order.value === selectedSort
  );

  return (
    <Menu>
      {({ isOpen }) => (
        <>
          <MenuButton
            isActive={isOpen}
            as={Button}
            textTransform="capitalize"
            rightIcon={isOpen ? <FaChevronUp /> : <FaChevronDown />}
          >
            Order by : {currentSortOrder?.label}
          </MenuButton>
          <MenuList>
            {sortOrders.map((order) => (
              <MenuItem
                textTransform="capitalize"
                onClick={() => onSelectSort(order.value)}
                key={order.value}
              >
                {order.label}
              </MenuItem>
            ))}
          </MenuList>
        </>
      )}
    </Menu>
  );
};

export default SortSelector;
