# NBA Injury Prediction Project

## Team Members
- Sparsh Kabra (sk9128@nyu.edu)
- Viraj Gulati (vg2114@nyu.edu)
- Michael Del Rosa (mfd9268@nyu.edu)

## Project Overview
This project leverages advanced machine learning techniques to predict injuries among NBA players, aiming to improve the accuracy of such predictions. By analyzing historical data on player injuries and performance metrics, we apply sophisticated models to foresee potential injuries. This not only helps in better player management but also informs strategic decisions in sports medicine and team planning.

## Repository Structure
- `NBA_Pred_Adv_Project.ipynb`: The core Jupyter notebook containing all data analysis, model training, and evaluation.
- `data/`: Directory housing all the datasets used in the project, which include player performance metrics and recorded injuries.
- `README.md`: Provides an overview of the project

## Additional Resources

### Presentation
For a detailed walkthrough of our project findings and methodologies, view our [Presentation Slides](https://docs.google.com/presentation/d/1HklDYnA65y5d8_ysRnkMOqRaZeJLNbQR2kbdxoL-BxM/edit?usp=sharing). 

### Milestone 3 Documentation
To see a comprehensive breakdown of our project's Milestone 3, including detailed discussions on our data analysis, model refinements, and key insights, refer to our [Milestone 3 Document](https://drive.google.com/file/d/1k0akDl_AL3KWO0Y5yI_xe8nEFfnCCiqt/view?usp=sharing). 


## Data Collection and Cleaning
We collected data from multiple reliable sources, including sports transaction records and player performance databases. Here’s how we managed the data:
- **Acquisition**: Data was initially acquired from public sports databases that track detailed player activities and injury reports over the seasons.
- **Preprocessing**: To ensure data quality, we implemented several preprocessing steps:
  - **Cleaning**: Involved removing duplicates, handling missing values, and correcting anomalies in the data.
  - **Standardization**: All data entries were standardized to ensure uniformity, particularly important for time-series analysis.
  - **Merging**: Multiple data sources were combined to create a comprehensive dataset that provides a holistic view of player histories and injury records.

## Models Used
### METIC Model
- **Concept**: The METIC model is a hybrid approach that integrates Long Short-Term Memory (LSTM) networks with Recurrent Neural Networks (RNNs) to analyze sequential and time-series data effectively.
- **Application**: This model specifically looks at game-by-game performance data and injury history to predict the likelihood of future injuries.

### RNN Model
- **Concept**: Focused solely on the temporal dynamics of player data, the RNN model excels in identifying patterns over time that precede injuries.
- **Implementation**: Utilizes layers of RNNs to process sequences of game performance metrics, learning from past outcomes to predict future risks.

## Key Results
- **Performance**: Both models demonstrated high predictive accuracy in our tests. The METIC model was particularly effective in capturing complex patterns in injury-prone data, while the RNN model provided robust predictions across different players and seasons.
- **Insights**: Detailed performance metrics, such as precision, recall, and F1-score for each model, are discussed extensively in our results section. These metrics help evaluate the effectiveness of each model in real-world scenarios.
