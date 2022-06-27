import { Grid, SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [urlImg, setUrlImg] = useState('');

  function handleViewImage(urlImg: string): void {
    setUrlImg(urlImg);
    onOpen();
  }

  return (
    <>
      <Grid templateColumns="repeat(3, 1fr)" gap="40px">
        {cards?.map(data => (
          <Card
            key={data.id}
            data={data}
            viewImage={() => handleViewImage(data.url)}
          />
        ))}
      </Grid>

      <ModalViewImage isOpen={isOpen} imgUrl={urlImg} onClose={onClose} />
    </>
  );
}
