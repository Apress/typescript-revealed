using System;

namespace NewSyntax
{
  public class Character
  {
    public string Name { get; set; }

    public void Shout(string words) {
      Console.WriteLine(words.ToUpper());
    }
  }
}