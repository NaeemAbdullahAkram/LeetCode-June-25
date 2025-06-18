from collections import deque
class Solution:
    def decodeString(self, s: str) -> str:
        n = len(s)
        stack = deque()
        num = 0
        builtString = ""
        
        for i in range(n):
            char = s[i]
            if char.isdigit():
                num = num * 10 + int(char)
            elif char == '[':
                stack.append([builtString, num])
                builtString = ""
                num = 0
            elif char == ']':
                prevStr, repeatTimes = stack.pop()
                if len(builtString) > 1000000:
                    return "Output too large! Skipping expansion."
                builtString = prevStr + (builtString * repeatTimes)
            else:
                builtString += char
            
        return builtString        