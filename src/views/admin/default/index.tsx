
// Chakra imports
import { Box, Button, Card, Flex, Menu, MenuButton, MenuItem, MenuList, Portal, SimpleGrid, Text, useColorModeValue } from '@chakra-ui/react';
// Assets
// Custom components
import CheckTable from 'views/admin/rtl/components/CheckTable';
import tableDataCheck from 'views/admin/default/variables/tableDataCheck';
import { FaEye } from 'react-icons/fa';
import { ChevronDownIcon } from '@chakra-ui/icons';

export default function UserReports() {
	// Chakra Color Mode
	const textColor = useColorModeValue('secondaryGray.900', 'white');
	// const brandColor = useColorModeValue('brand.500', 'white');
	// const boxBg = useColorModeValue('secondaryGray.300', 'whiteAlpha.100');
	return (
		<Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
			<SimpleGrid columns={{ base: 1, md: 1, xl: 1 }} gap='20px' mb='20px'>

			</SimpleGrid>

			<SimpleGrid columns={{ base: 1, md: 1, xl: 1 }} gap='20px' mb='20px'>
				<Card flexDirection='column' w='100%' px='0px' py='15px' overflowX={{ sm: 'scroll', lg: 'hidden' }}>
					<Flex px='25px' mb="8px" align='center' justifyContent='space-between'>
						<Flex align='center'>
							<Text color={textColor} fontSize='22px' fontWeight='700' lineHeight='100%' mr='12px'>
								Estimated Balance
							</Text>
							<FaEye color={textColor} />
						</Flex>
						<Flex align='center'>
							<Button>Withdraw</Button>
							<Button>Cash In</Button>
						</Flex>
					</Flex>
					<Flex px='25px' mb="8px" align='center'>
						<Text color={textColor} fontSize='24px' fontWeight='700' lineHeight='100%' mr='12px'>
							0.00
						</Text>
						<Menu>
							<MenuButton color={textColor}>BTC <ChevronDownIcon /></MenuButton>
							<Portal>
								<MenuList>
									<MenuItem color={textColor}>BTC</MenuItem>
									<MenuItem color={textColor}>USDT</MenuItem>
									<MenuItem color={textColor}>ETH</MenuItem>
									<MenuItem color={textColor}>BNB</MenuItem>
								</MenuList>
							</Portal>
						</Menu>
					</Flex>
					<Box px='25px'>
						<Text color={textColor} fontSize='16px' fontWeight='600' lineHeight='100%' mr='12px'>≈ $0.00</Text>
					</Box>
				</Card>
			</SimpleGrid>
			<SimpleGrid columns={{ base: 1, md: 1, xl: 1 }} gap='20px' mb='20px'>
				<CheckTable tableData={tableDataCheck} />
			</SimpleGrid>
		</Box>
	);
}
