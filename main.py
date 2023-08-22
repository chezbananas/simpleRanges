import PIL
import tkinter


def parse():
    print(players.get())

m = tkinter.Tk() 
m.geometry("500x800")

players = tkinter.StringVar()
players.set("# of Players")

drop = tkinter.OptionMenu(m, players, '3', '4', '5', '6', '7', '8', '9')    
drop.pack()

tkinter.Button(text="Print Players", command=parse).pack()
m.mainloop()