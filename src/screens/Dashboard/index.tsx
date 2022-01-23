import React from 'react';

import { Card } from '../../components/Card';
import { TransactionCard, ITransactionCardProps } from '../../components/TransactionCard';

import {
    Container,
    Header,
    UserWrapper,
    UserInfo,
    Photo,
    User,
    UserGreeting,
    UserName,
    Icon,
    HighlightCards,
    Transaction,
    Title,
    TransactionList
} from './styles'

export interface DataListProps extends ITransactionCardProps {
    id: string;
}

export function Dashboard(){
    const data: DataListProps[] = [
        {  
            id: '1', 
            type: 'income',
            title: "Desenvolvimento de site",
            amount: "R$ 12.000,00",
            category: {
                name: "vendas",
                icon: "dollar-sign"
            },
            date: "19/01/2022",
        },

        {
            id: '2',
            type: 'outcome',
            title: "Hamburgueria Pizzy",
            amount: "R$ 59,00",
            category: {
                name: "Alimentação",
                icon: "coffee"
            },
            date: "20/01/2022",
        },

        {
            id: '3',
            type: 'outcome',
            title: "Aluguel do Apartamento",
            amount: "R$ 3.000,00",
            category: {
                name: "Casa",
                icon: "shopping-bag"
            },
            date: "20/01/2022",
        }
    ];

    return (
        <Container>
            <Header>
                <UserWrapper>
                    <UserInfo>
                        <Photo source={{ uri: 'https://avatars.githubusercontent.com/u/62800593?v=4' }} />
                        <User>
                            <UserGreeting>Olá,</UserGreeting>
                            <UserName>Ricardo</UserName>
                        </User>
                    </UserInfo>
                    <Icon name="power" />
                </UserWrapper>
            </Header>

            <HighlightCards>
                <Card
                    type='up'
                    title="Entrada"
                    amount="R$ 17.400,00"
                    lastTransaction='Última entrada dia 13 de abril'
                />
                <Card
                    type='down'
                    title="Saída"
                    amount="R$ 1.259,00"
                    lastTransaction='Última saída dia 03 de abril'
                />
                <Card
                    type='total'
                    title="Total"
                    amount="R$ 16.141,00"
                    lastTransaction='01 a 16 abril'
                />
            </HighlightCards>

            <Transaction>
                <Title>Extrato</Title>
                <TransactionList
                    data={data}
                    keyExtractor={ item => item.id}
                    renderItem={({ item }) => <TransactionCard data={item} />}
                />
            </Transaction>

        </Container>
    );
}
