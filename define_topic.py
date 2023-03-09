
def define_topic(topic_name):
    try:
        import openai

        openai.api_key = "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"


        definition = openai.ChatCompletion.create(
        model="gpt-3.5-turbo", 
        messages=[{"role": "user", "content": "Simply define: "+topic_name}]
        )["choices"][0]["message"]["content"]
    except Exception as e: 
        print(f"error: {e}\n")
        definition = f"define_topic 001 error: {e}"

    return definition