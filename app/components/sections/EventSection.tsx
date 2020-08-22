import React from 'react';
import moment from 'moment';
import styled from '@emotion/styled';

import { Link } from '~/components';
import { Event as EventType, EventSection as EventSectionContent } from '~/shared/types';

const Container = styled.div({
  width: '80%',
  margin: '0 auto 60px',
});

const EventContainer = styled.div({
  display: 'flex',
  marginTop: 25,
});

const DateContainer = styled.div({
  marginRight: 30,
  textAlign: 'center',
});

interface Props {
  content: EventSectionContent;
}

const Event = (event: EventType) => {
  const { title, date, startTime, endTime, location, eventLink } = event;

  const day = moment(date).format('MMM D');
  const year = moment(date).format('YYYY');
  const formattedStartTime = moment(startTime, 'HH:mm:ss').format('h:mma');
  const formattedEndTime = moment(endTime, 'HH:mm:ss').format('h:mma');

  return (
    <EventContainer>
      <DateContainer>
        <div><b>{day}</b></div>
        <div><b>{year}</b></div>
      </DateContainer>
      <div>
        <div><b>{title}</b></div>
        <div>
          {formattedStartTime}
          {formattedEndTime && <> - {formattedEndTime}</>}
          {location && <> &middot; {location}</>}
        </div>
        <Link href={eventLink}>View Event</Link>
      </div>
    </EventContainer>
  );
};

const EventSection = ({ content }: Props) => {
  const { title, subtitle, events } = content;
  return (
    <Container>
      <h2>{title || 'Upcoming Events'}</h2>
      <p>{subtitle}</p>
      {events.map((event, index) => <Event key={index} {...event} />)}
    </Container>
  );
};

export default EventSection;
