import PropTypes from 'prop-types';
import {
  StatisticsSection,
  Title,
  StatList,
  Item,
  Label,
  Percentage,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  const randomColor = () =>
    `#${Math.floor(Math.random() * 16777215).toString(16)}`;

  return (
    <StatisticsSection>
      {title && <Title>{title}</Title>}

      <StatList>
        {stats.map(({ id, label, percentage }) => (
          <Item key={id} backgroundColor={randomColor()}>
            <Label>{label}</Label>
            <Percentage>{percentage}%</Percentage>
          </Item>
        ))}
      </StatList>
    </StatisticsSection>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
