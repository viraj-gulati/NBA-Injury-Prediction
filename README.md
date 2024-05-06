# NBA Injury Prediction Project

## Team Members
- Sparsh Kabra (sk9128@nyu.edu)
- Viraj Gulati (vg2114@nyu.edu)
- Michael Del Rosa (mfd9268@nyu.edu)

## Project Overview
This project employs advanced machine learning techniques to predict injuries in NBA players. Utilizing multiple data sources and complex models including METIC and RNN, the goal is to improve injury prediction accuracy, thereby informing better player management and health strategies.

## Repository Structure
- `ADTS_Project.ipynb`: Core project Jupyter notebook.
- `data/`: Contains all datasets used in the project, including player performance and injury records.
- `README.md`: Project overview and setup guide.

## Data Collection and Cleaning
Data was collected from various sports transaction records and processed using Python. Key steps involved:
- Fetching last year's player injuries.
- Cleaning and preprocessing data to handle missing values and standardize entries.
- Merging data from multiple sources to create a comprehensive dataset for analysis.

## Models Used
### METIC Model
- Combines LSTM and RNN techniques.
- Analyzes sequential game data alongside player statistics.

### RNN Model
- Specializes in processing time-series data to capture temporal dynamics of injuries.

## Key Results
- Both models demonstrate high accuracy in injury prediction, with detailed performance metrics discussed in our results section.
