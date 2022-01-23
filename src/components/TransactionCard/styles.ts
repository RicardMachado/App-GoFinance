import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { Feather } from '@expo/vector-icons';

interface ITransactionTypeProps {
    type: 'income' | 'outcome'
}

export const Container = styled.View`
    background-color: ${({ theme }) => theme.colors.background};

    border-radius: 5px;
    padding: 17px 24px;

    margin-bottom: 16px;
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;
`;

export const Amount = styled.Text<ITransactionTypeProps>`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(20)}px;
    margin-top: 2px;

    color: ${({ theme, type }) => 
        type === 'income' ? theme.colors.success : theme.colors.attention
    };
`;

export const Footer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 19px;
`;

export const Category = styled.View`
    flex-direction: row;
    align-items: center;

`;

export const Icon = styled(Feather)`
    font-size: ${RFValue(20)}px;
    color: ${({ theme }) => theme.colors.text};


`;

export const CategoryName = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;
    margin-left: 17px;

    color: ${({ theme }) => theme.colors.text};
`;

export const Date = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;
    color: ${({ theme }) => theme.colors.text};
    
`;
