import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';
import { useNetInfo } from '@react-native-community/netinfo';

import { Car as ModelCar } from '../../database/model/Car';

import { getAccessoryIcon } from '../../utils/getAccessoryIcon';

import {
    Container,
    Details,
    Brand,
    Name,
    About,
    Rent,
    Period,
    Price,
    Type,
    CarImage
} from './styles';

interface Props extends RectButtonProperties{
    data: ModelCar
}

export function Car({ data, ...rest } : Props){
    const MotorIcon = getAccessoryIcon(data.fuel_type);

    const netInfo = useNetInfo();

    return(
        <Container {...rest}>
            <Details>
                <Brand>{data.brand}</Brand>
                <Name>{data.name}</Name>

                <About>
                    <Rent>
                        <Period>{data.period}</Period>
                        <Price>{`RS ${netInfo.isConnected === true ? data.price : '...'}`}</Price>
                    </Rent>

                    <Type>
                        <MotorIcon />
                    </Type>
                </About>
            </Details>

            <CarImage 
                source={{ uri: data.thumbnail }}
                resizeMode="contain"
            />
        </Container>
    );
}