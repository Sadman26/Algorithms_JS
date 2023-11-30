// Assalamu Alaikum 💖😂
// Bm.Shadman Sakib Mahee (Sadman26)
#include <bits/stdc++.h>
using namespace std;
int main()
{
    stack<int> stk;
    stack<int> stk2;
    int n;
    int x;
    cin >> n;
    for (int i = 0; i < n; i++)
    {
        int x;
        cin >> x;
        stk.push(x);
    }
    while (!stk.empty())
    {
        cout << "================================================"
             << endl
             << "Top: " << stk.top() << endl
             << "Remaining- " << endl;
        stk.pop();
        stk2 = stk;
        while (!stk2.empty())
        {
            cout << stk2.top() << "" << endl;
            stk2.pop();
        }
    }
    return 0;
}
