import React from 'react';

import { 
    Container,
    Title,
    Amount,
    Footer,
    Category,
    Icon,
    CategoryName,
    Date

} from './styles';

interface ICategory {
    name: string;
    icon: string;
}

export interface ITransactionCardProps {
    type: 'income' | 'outcome';
    title: string;
    amount: string;
    category: ICategory
    date: string;
}

interface IProps {
    data: ITransactionCardProps;
}

export function TransactionCard({ data }: IProps) {
    return (
        <Container>
            <Title>{data.title}</Title>

            <Amount type={data.type}>
                { data.type === 'outcome' && '- ' } 
                { data.amount }
            </Amount>

            <Footer>

                <Category>
                    <Icon name={data.category.icon}/>
                    <CategoryName>{data.category.name}</CategoryName>
                </Category>

                <Date>{data.date}</Date>
            </Footer>
        </Container>
    );
}