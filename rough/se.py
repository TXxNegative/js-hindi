
paragraphs = text.split("\n\n")
print("Paragraph Tokens:\n")

for i, para in enumerate(paragraphs, 1):
    print(f"Paragraph {i}:")
    print(para)
    print()

text="NLP is an interesting subject."
words=word_tokenize(text)
print(words)