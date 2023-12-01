// Assalamu Alaikum 
// Bm.Shadman Sakib Mahee (Sadman26)
#include <bits/stdc++.h>
using namespace std;
int main()
{
    int n;
    cin >> n;
    bool arr[n][n];
    for (auto i = 0; i < n - 1; i++)
    {
        int a, b;
        cin >> a >> b;
        arr[a][b] = true;
        arr[b][a] = true;
    }
    int x1, x2;
    cin >> x1 >> x2;
    if (arr[x1][x2] == true)
    {
        cout << "CONNECTED";
    }
    else
    {
        cout << "NOT CONNECTED";
    }
    return 0;
}