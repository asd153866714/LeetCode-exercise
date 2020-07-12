let getDecimalValue = (head, ans = 0) => {
    while (head) {
        ans <<= 1;
        ans |= head.val;
        head = head.next;
    }
    return ans;
};

// use bit operation