import json
import os

class Feedback:
    def __init__(self):
        self.feedback_file = 'feedback.json'
        self.feedback_data = self.load_feedback()

    def load_feedback(self):
        if os.path.exists(self.feedback_file):
            with open(self.feedback_file, 'r') as file:
                return json.load(file)
        else:
            return {}

    def save_feedback(self):
        with open(self.feedback_file, 'w') as file:
            json.dump(self.feedback_data, file, indent=4)

    def provide_feedback(self, anomaly_id, is_true_anomaly):
        self.feedback_data[anomaly_id] = is_true_anomaly
        self.save_feedback()

    def get_feedback(self, anomaly_id):
        return self.feedback_data.get(anomaly_id, None)

if __name__ == "__main__":
    feedback = Feedback()
    while True:
        print("Please enter the anomaly ID (or 'exit' to quit):")
        anomaly_id = input()
        if anomaly_id.lower() == 'exit':
            break
        print("Is this a true anomaly? (yes/no):")
        is_true_anomaly = input().lower() == 'yes'
        feedback.provide_feedback(anomaly_id, is_true_anomaly)
        print("Thank you for your feedback!")