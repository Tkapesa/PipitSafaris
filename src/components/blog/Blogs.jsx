import React, { useState } from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion
import {
  ButtonWrapper,
  Container,
  DateWrapper,
  Figure,
  H2,
  Image,
  Left,
  Paper,
  Right,
  Strong,
  Text,
  Wrapper,
} from '../../styles/blogs/Blogs';
import { Button } from '../../styles/common/styles';
import BlogData from '../../api/BlogData.json';

export default function Blogs({ theme }) {
  console.log('Received theme:', theme); // Debugging to check if theme is passed correctly

  // State to manage visible blogs
  const [visibleBlogs, setVisibleBlogs] = useState(3);

  // Handler to load more blogs
  const handleLoadMore = () => {
    setVisibleBlogs((prev) => prev + 3); // Show 3 more blogs
  };

  // Animation variants for Framer Motion
  const wrapperVariants = {
    hidden: { opacity: 0, y: 50 }, // Start state
    visible: { opacity: 1, y: 0 }, // End state
  };

  const buttonVariants = {
    hover: { scale: 1.1 }, // Slight zoom on hover
    tap: { scale: 0.9 }, // Scale down when clicked
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delay between each child animation
      },
    },
  };

  return (
    <Container theme={theme}>
      <H2 theme={theme}>Latest</H2>

      {/* Motion Container */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Map over BlogData with visibleBlogs count */}
        {BlogData.slice(0, visibleBlogs).map((blog, index) => (
          <motion.div
            key={blog.id}
            variants={wrapperVariants}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            style={{ marginBottom: '15px' }}
          >
            <Wrapper theme={theme}>
              <Left theme={theme}>
                <Figure>
                  <Image
                    src={blog.imageSrc}
                    alt={blog.title}
                    width={160}
                    height={100}
                  />
                </Figure>
              </Left>
              <Right theme={theme}>
                <Strong theme={theme}>{blog.title}</Strong>
                <Text theme={theme}>{blog.description}</Text>
                <DateWrapper theme={theme}>
                  <Paper theme={theme}>{blog.datePublished}</Paper>
                  <Paper theme={theme}>{blog.readTime}</Paper>
                </DateWrapper>
              </Right>
            </Wrapper>
          </motion.div>
        ))}
      </motion.div>

      {/* Load More Button */}
      {visibleBlogs < BlogData.length && ( // Show "Load More" button only if there are more blogs
        <ButtonWrapper theme={theme}>
          <motion.div
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <Button variant="primary" onClick={handleLoadMore}>
              Load More
            </Button>
          </motion.div>
        </ButtonWrapper>
      )}
    </Container>
  );
}
